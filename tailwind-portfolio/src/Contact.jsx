// src/sections/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Instagram,
  Twitter,
  Facebook,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

// ===== Your EmailJS credentials =====
const SERVICE_ID  = "service_qh1nqj9";
const TEMPLATE_ID = "template_bs384a8"; // <-- REPLACE with your actual template id
const PUBLIC_KEY  = "dU5cFPpX0NC1gkP6K"; // (works inline; you can also move to .env)

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState({ sending: false, ok: null, msg: "" });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errors = {
    name: form.name.trim() ? "" : "Your name is required.",
    email: emailRegex.test(form.email) ? "" : "Enter a valid email address.",
    subject: form.subject.trim() ? "" : "Please add a subject.",
    message: form.message.trim().length >= 10 ? "" : "Message should be at least 10 characters.",
  };
  const hasErrors = Object.values(errors).some(Boolean);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const onBlur   = (e) => setTouched((t) => ({ ...t, [e.target.name]: true }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });
    if (hasErrors) return;

    setStatus({ sending: true, ok: null, msg: "" });
    try {
      const params = {
        name:    form.name,
        email:   form.email,
        title:   form.subject,
        message: form.message,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, PUBLIC_KEY);

      setStatus({ sending: false, ok: true, msg: "Thanks! Your message has been sent to my inbox." });
      setForm({ name: "", email: "", subject: "", message: "" });
      setTouched({});
    } catch (err) {
      const msg = err?.text || err?.message || "Could not send right now. Please try again.";
      console.error("EmailJS error:", err);
      setStatus({ sending: false, ok: false, msg });
    }
  };

  return (
    <section id="contact" className="relative max-w-6xl mx-auto px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-slate-900"
      >
        Get in{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-700">
          Touch
        </span>
      </motion.h2>
      <div className="mt-2 h-px w-24 bg-slate-300" />

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-slate-300 bg-white/5 p-6 backdrop-blur"
        >
          <p className="text-slate-600">
            I’m available for product engineering roles, startup collaborations, and selected full-stack projects.
            Send a note with the problem you are solving and where you need support.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-slate-700">
            <div className="flex items-center gap-3"><Phone size={16} /> +234 81 6438 5796</div>
            <div className="flex items-center gap-3"><Mail size={16} /> michealfadairo14@gmail.com</div>
          </div>
        </motion.div>

        {/* Socials */}
        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-3"
        >
          <li>
            <a
              href="https://www.linkedin.com/in/michael-fadairo-292919347/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-xl border border-slate-300 bg-white/5 p-4 hover:bg-white/10"
            >
              <span className="inline-flex items-center gap-3 text-slate-800">
                <Linkedin size={18} /> LinkedIn
              </span>
              <span className="opacity-70 group-hover:opacity-100 text-slate-600">→</span>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/Mikefad"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-xl border border-slate-300 bg-white/5 p-4 hover:bg-white/10"
            >
              <span className="inline-flex items-center gap-3 text-slate-800">
                <Github size={18} /> GitHub
              </span>
              <span className="opacity-70 group-hover:opacity-100 text-slate-600">→</span>
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/_michael_tech_/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-xl border border-slate-300 bg-white/5 p-4 hover:bg-white/10"
            >
              <span className="inline-flex items-center gap-3 text-slate-800">
                <Instagram size={18} /> Instagram
              </span>
              <span className="opacity-70 group-hover:opacity-100 text-slate-600">→</span>
            </a>
          </li>

          {/* NEW: X (Twitter) */}
          <li>
            <a
              href="https://x.com/360_Mike_"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-xl border border-slate-300 bg-white/5 p-4 hover:bg-white/10"
            >
              <span className="inline-flex items-center gap-3 text-slate-800">
                <Twitter size={18} /> X (Twitter)
              </span>
              <span className="opacity-70 group-hover:opacity-100 text-slate-600">→</span>
            </a>
          </li>

          {/* NEW: Facebook */}
          <li>
            <a
              href="https://web.facebook.com/profile.php?id=61572195697785"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-xl border border-slate-300 bg-white/5 p-4 hover:bg-white/10"
            >
              <span className="inline-flex items-center gap-3 text-slate-800">
                <Facebook size={18} /> Facebook
              </span>
              <span className="opacity-70 group-hover:opacity-100 text-slate-600">→</span>
            </a>
          </li>
        </motion.ul>
      </div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 rounded-2xl border border-slate-300 bg-white/5 p-6 backdrop-blur"
      >
        <h3 className="text-lg font-semibold text-slate-900">Send me a message</h3>
        <p className="text-sm text-slate-600 mt-1">This form sends directly to my inbox.</p>

        {status.ok === true && (
          <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700">
            <CheckCircle2 size={16} /> {status.msg}
          </div>
        )}
        {status.ok === false && (
          <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-500/10 px-3 py-2 text-sm text-red-700">
            <AlertCircle size={16} /> {status.msg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid gap-1">
            <label htmlFor="name" className="text-sm text-slate-700">Name</label>
            <input
              id="name" name="name" value={form.name} onChange={onChange} onBlur={onBlur} required
              placeholder="Your name"
              className={`rounded-xl border bg-black/30 px-3 py-2 outline-none placeholder:text-slate-800 ${
                touched.name && errors.name ? "border-red-500/50" : "border-slate-300 focus:border-slate-500"
              }`}
            />
            {touched.name && errors.name && <span className="text-xs text-red-600">{errors.name}</span>}
          </div>

          <div className="grid gap-1">
            <label htmlFor="email" className="text-sm text-slate-700">Email</label>
            <input
              id="email" name="email" type="email" value={form.email} onChange={onChange} onBlur={onBlur} required
              placeholder="you@example.com"
              className={`rounded-xl border bg-black/30 px-3 py-2 outline-none placeholder:text-slate-800 ${
                touched.email && errors.email ? "border-red-500/50" : "border-slate-300 focus:border-slate-500"
              }`}
            />
            {touched.email && errors.email && <span className="text-xs text-red-600">{errors.email}</span>}
          </div>

          <div className="md:col-span-2 grid gap-1">
            <label htmlFor="subject" className="text-sm text-slate-700">Subject</label>
            <input
              id="subject" name="subject" value={form.subject} onChange={onChange} onBlur={onBlur} required
              placeholder="How can I help?"
              className={`rounded-xl border bg-black/30 px-3 py-2 outline-none placeholder:text-slate-800 ${
                touched.subject && errors.subject ? "border-red-500/50" : "border-slate-300 focus:border-slate-500"
              }`}
            />
            {touched.subject && errors.subject && <span className="text-xs text-red-600">{errors.subject}</span>}
          </div>

          <div className="md:col-span-2 grid gap-1">
            <label htmlFor="message" className="text-sm text-slate-700">Message</label>
            <textarea
              id="message" name="message" rows={6} value={form.message} onChange={onChange} onBlur={onBlur} required
              placeholder="Share a few details about your project or question…"
              className={`rounded-xl border bg-black/30 px-3 py-2 outline-none placeholder:text-slate-800 ${
                touched.message && errors.message ? "border-red-500/50" : "border-slate-300 focus:border-slate-500"
              }`}
            />
            {touched.message && errors.message && <span className="text-xs text-red-600">{errors.message}</span>}
          </div>

          <div className="md:col-span-2 flex items-center justify-between gap-3">
            <p className="text-xs text-slate-600">I’ll reply to your email shortly.</p>
            <button
              type="submit"
              disabled={status.sending || hasErrors}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 font-medium transition shadow-lg ${
                status.sending || hasErrors
                  ? "bg-slate-700 cursor-not-allowed opacity-70"
                  : "bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:opacity-90"
              }`}
            >
              <Send size={16} />
              {status.sending ? "Sending…" : "Send Message"}
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
