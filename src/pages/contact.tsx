"use client";

import { FormEvent, Ref, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "@/styles/contact.module.scss";
import cx from "classnames";
import Head from "next/head"; // Added for metadata

export default function Contact() {
  const [formDisabled, setFormDisabled] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form: Ref<HTMLFormElement> | null = useRef(null);

  useEffect(() => {
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_KEY,
      blockHeadless: true,
      limitRate: {
        id: "app",
        throttle: 10000,
      },
    });
  }, []);

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.current) {
      return;
    }
    setFormDisabled(true);
    setIsSubmitting(true);

    emailjs
      .sendForm("default_service", "template_g4ggbxg", form.current)
      .then((res) => {
        if (res.status === 200) {
          setIsSubmitting(false);
          setShowSuccess(true);
        }
      })
      .catch((err) => {
        console.error(err);
        setFormDisabled(false);
        setIsSubmitting(false);
      });
  };

  const resetForm = () => {
    setShowSuccess(false);
    setFormDisabled(false);
    if (form.current) {
      form.current.reset();
    }
  };

  return (
    <>
      {" "}
      <Head>
        <title>Contact - Portfolio</title> {/* Custom title for this page */}{" "}
        <meta name="description" content="Get in touch via the contact form." />{" "}
        {/* Optional, based on context */}{" "}
      </Head>
      <div className={styles.container}>
        <div
          className={`${styles.formContainer} ${showSuccess ? styles.hidden : ""}`}
        >
          <form
            id="contact"
            ref={form}
            onSubmit={sendEmail}
            className={styles.contactForm}
          >
            <fieldset disabled={formDisabled} className={styles.fieldset}>
              <legend className={styles.legend}>Get in touch</legend>

              <div className={styles.inputGroup}>
                <label
                  htmlFor="name"
                  className={cx(styles.label, styles.required)}
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className={styles.input}
                  placeholder="Your full name"
                />
              </div>

              <div className={styles.inputGroup}>
                <label
                  htmlFor="contact"
                  className={cx(styles.label, styles.required)}
                >
                  Contact info
                </label>
                <input
                  id="contact"
                  name="contact"
                  type="text"
                  className={styles.input}
                  placeholder="Email or phone number"
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  cols={40}
                  rows={5}
                  className={styles.textarea}
                  placeholder="Tell me about your project or question..."
                />
              </div>

              <button
                type="submit"
                className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ""}`}
                disabled={formDisabled}
              >
                {isSubmitting ? (
                  <>
                    <span className={styles.spinner}></span>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </fieldset>
          </form>
        </div>

        <div
          className={`${styles.successMessage} ${showSuccess ? styles.visible : ""}`}
        >
          <div className={styles.successContent}>
            <div className={styles.checkmarkSvg}>
              <img className={styles.check} src="./check.svg" alt="checkmark" />
            </div>
            <h2>Thank you!</h2>
            <div>
              <p>Your message has been sent successfully.</p>
              <p>I'll get back to you as soon as possible.</p>
            </div>
            <button onClick={resetForm} className={styles.resetButton}>
              Send another message
            </button>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
