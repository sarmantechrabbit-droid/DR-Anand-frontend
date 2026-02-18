import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Play, Quote } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { API_BASE_URL } from "../../api/api";

const API_BASE = API_BASE_URL;
const API_ORIGIN = new URL(API_BASE).origin;
const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop";

function getStatus(item) {
  const sources = [item, item?.data, item?.testimonial, item?.attributes];
  for (const source of sources) {
    if (!source || typeof source !== "object") continue;
    const value =
      source?.status ??
      source?.Status ??
      source?.approvalStatus ??
      source?.approval_status;
    if (typeof value === "string") {
      return value.trim().toLowerCase();
    }
  }
  return "";
}

function isPublishedTestimonial(item) {
  const status = getStatus(item);
  return status.startsWith("publish");
}

function resolveImageUrl(imageValue) {
  const image =
    typeof imageValue === "string"
      ? imageValue
      : imageValue?.url || imageValue?.path || imageValue?.src || "";

  if (!image) return FALLBACK_IMAGE;
  if (
    image.startsWith("http://") ||
    image.startsWith("https://") ||
    image.startsWith("data:")
  ) {
    return image;
  }

  if (image.startsWith("/uploads/")) {
    return `${API_ORIGIN}${image}`;
  }

  if (image.startsWith("/")) {
    return `${API_ORIGIN}${image}`;
  }

  return `${API_ORIGIN}/uploads/${image}`;
}

function normalizeTestimonial(item, index) {
  const videoUrl =
    item?.youtubeLink ||
    item?.youtube_link ||
    item?.videoLink ||
    item?.video_link ||
    item?.videoUrl ||
    "";
  const hasYoutubeVideo =
    typeof videoUrl === "string" &&
    (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be"));

  return {
    id: item?._id || item?.id || `testimonial-${index + 1}`,
    name:
      item?.name ||
      item?.patient ||
      item?.patientName ||
      item?.patient_name ||
      "Verified Patient",
    description:
      item?.comment ||
      item?.description ||
      item?.message ||
      item?.content ||
      item?.review ||
      "Patient shared a positive treatment experience.",
    image: resolveImageUrl(item?.image || item?.imageUrl || item?.photo),
    imageDescription:
      item?.imageDescription || item?.alt || item?.name || "Patient testimonial",
    videoUrl,
    hasYoutubeVideo,
    status: getStatus(item),
    likes: Number(item?.likes || 0),
  };
}

function shouldShowTestimonial(item) {
  if (typeof item?.status === "string") {
    const status = item.status.trim().toLowerCase();
    return status.startsWith("publish");
  }
  return isPublishedTestimonial(item);
}

function unwrapTestimonialItem(item) {
  if (!item || typeof item !== "object") return item;
  if (item?.testimonial) return item.testimonial;
  if (item?.data && !Array.isArray(item.data)) return item.data;
  return item;
}

export default function Testimonials() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get(`${API_BASE}/api/testimonials`, {
          timeout: 8000,
        });
        const payload = response?.data;
        const rawItems = Array.isArray(payload)
          ? payload
          : payload?.data || payload?.testimonials || payload?.items;

        const flatItems = Array.isArray(rawItems)
          ? rawItems.flatMap((entry) => (Array.isArray(entry) ? entry : [entry]))
          : [];

        const cleanedItems = flatItems
          .map((item) => unwrapTestimonialItem(item))
          .filter(Boolean);

        const apiItems = cleanedItems
          .filter((item) => isPublishedTestimonial(item))
          .map((item, index) => normalizeTestimonial(item, index));

        if (isMounted && Array.isArray(rawItems)) {
          setItems(apiItems);
        } else if (isMounted) {
          setItems([]);
          setError("Invalid testimonials API response format.");
        }
      } catch {
        if (isMounted) {
          setItems([]);
          setError("Failed to load testimonials from API.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchTestimonials();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="py-20 bg-white relative z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-[#58c8ca]"></div>
              <span className="text-[#58c8ca] font-bold uppercase text-sm tracking-wider">
                TESTIMONIALS
              </span>
              <div className="w-12 h-0.5 bg-[#58c8ca]"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Patient Success Stories
            </h2>
          </div>

          {loading && (
            <div className="text-center text-gray-600 mb-8">
              Loading testimonials...
            </div>
          )}
          {!loading && error && (
            <div className="text-center text-amber-700 mb-8">{error}</div>
          )}
          {!loading && items.length === 0 && (
            <div className="text-center text-gray-600 mb-8">
              No testimonials available.
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {items.filter((item) => shouldShowTestimonial(item)).map((testimonial, index) => (
              <motion.div
                key={testimonial.id ?? testimonial._id ?? index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative z-10"
              >
                {testimonial.hasYoutubeVideo ? (
                  <a
                    href={testimonial.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative mb-6 rounded-xl overflow-hidden group block"
                    aria-label={`Watch testimonial video of ${testimonial.name}`}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.imageDescription}
                      className="w-full h-48 object-cover"
                      onError={(event) => {
                        event.currentTarget.src = FALLBACK_IMAGE;
                      }}
                    />
                    <div className="absolute inset-0 bg-black/35 flex items-center justify-center group-hover:bg-black/45 transition">
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                        <Play
                          size={22}
                          className="text-[#58c8ca] ml-0.5"
                          fill="currentColor"
                        />
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="relative mb-6 rounded-xl overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.imageDescription}
                      className="w-full h-48 object-cover"
                      onError={(event) => {
                        event.currentTarget.src = FALLBACK_IMAGE;
                      }}
                    />
                  </div>
                )}

                <Quote className="text-[#58c8ca] mb-4" size={28} />
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-4 min-h-24">
                  {testimonial.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
