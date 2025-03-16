"use client";

import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section id="mission" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
              Our Mission
            </h2>
            <div className="prose prose-lg">
              <p className="mb-6 text-gray-800">
                Agave Tech is dedicated to developing innovative products that
                combine hardware and software, enhancing human capabilities
                through artificial intelligence technologies.
              </p>
              <p className="text-gray-800">
                We enable people to transcend their limitations, solve complex
                problems more efficiently, and achieve higher levels of
                productivity and creativity.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-xl bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 text-purple-600">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Innovation Through Integration
                  </h3>
                  <p className="text-gray-700 text-lg">
                    Seamlessly blending cutting-edge hardware with intelligent
                    software to create transformative solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
