"use client";

import { useEffect } from "react";

export default function MauticForm() {
  useEffect(() => {
    // Load Mautic form JS for submission handling
    if (!document.getElementById("mautic-form-script")) {
      const script = document.createElement("script");
      script.id = "mautic-form-script";
      script.src = "https://mautic.abacusdesk.co.in/media/js/mautic-form.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div>
      {/* Mautic error and success messages */}
      <div className="mauticform-error" id="mauticform_abacusdeskwordpresssitehacked_error"></div>
      <div className="mauticform-message" id="mauticform_abacusdeskwordpresssitehacked_message"></div>

      <form
        className="grid gap-3"
        autoComplete="false"
        role="form"
        method="post"
        action="https://mautic.abacusdesk.co.in/form/submit?formId=15"
        id="mauticform_abacusdeskwordpresssitehacked"
        data-mautic-form="abacusdeskwordpresssitehacked"
        encType="multipart/form-data"
      >
        <div className="mauticform-innerform">
          <div className="mauticform-page-wrapper mauticform-page-1" data-mautic-form-page="1">
            
            {/* Full Name and Company Fields */}
            <div className="grid md:grid-cols-2 gap-3">
              <div 
                id="mauticform_abacusdeskwordpresssitehacked_f_name"
                className="mauticform-row mauticform-text mauticform-field-1 mauticform-required"
                data-validate="f_name"
                data-validation-type="text"
              >
                <input
                  type="text"
                  name="mauticform[f_name]"
                  id="mauticform_input_abacusdeskwordpresssitehacked_f_name"
                  className="border rounded-xl px-4 py-3 mauticform-input w-full"
                  placeholder="Full Name"
                />
                <span className="mauticform-errormsg text-red-500 text-sm mt-1" style={{ display: 'none' }}>This field is required</span>
              </div>

              <div
                id="mauticform_abacusdeskwordpresssitehacked_company"
                className="mauticform-row mauticform-text mauticform-field-2 mauticform-required"
                data-validate="company"
                data-validation-type="text"
              >
                <input
                  type="text"
                  name="mauticform[company]"
                  id="mauticform_input_abacusdeskwordpresssitehacked_company"
                  className="border rounded-xl px-4 py-3 mauticform-input w-full"
                  placeholder="Company"
                />
                <span className="mauticform-errormsg text-red-500 text-sm mt-1" style={{ display: 'none' }}>This field is required</span>
              </div>
            </div>

            {/* Email Field */}
            <div
              id="mauticform_abacusdeskwordpresssitehacked_email"
              className="mauticform-row mauticform-email mauticform-field-3 mauticform-required"
              data-validate="email"
              data-validation-type="email"
            >
              <input
                type="email"
                name="mauticform[email]"
                id="mauticform_input_abacusdeskwordpresssitehacked_email"
                className="border rounded-xl px-4 py-3 mauticform-input w-full"
                placeholder="Business Email"
              />
              <span className="mauticform-errormsg text-red-500 text-sm mt-1" style={{ display: 'none' }}>This field is required</span>
            </div>

            {/* Phone Field */}
            <div
              id="mauticform_abacusdeskwordpresssitehacked_phone"
              className="mauticform-row mauticform-tel mauticform-field-4 mauticform-required"
              data-validate="phone"
              data-validation-type="tel"
            >
              <input
                type="tel"
                name="mauticform[phone]"
                id="mauticform_input_abacusdeskwordpresssitehacked_phone"
                className="border rounded-xl px-4 py-3 mauticform-input w-full"
                placeholder="Phone/WhatsApp"
              />
              <span className="mauticform-errormsg text-red-500 text-sm mt-1" style={{ display: 'none' }}>This field is required</span>
            </div>

            {/* Website Field */}
            <div
              id="mauticform_abacusdeskwordpresssitehacked_website"
              className="mauticform-row mauticform-url mauticform-field-5 mauticform-required"
              data-validate="website"
              data-validation-type="url"
            >
              <input
                type="url"
                name="mauticform[website]"
                id="mauticform_input_abacusdeskwordpresssitehacked_website"
                className="border rounded-xl px-4 py-3 mauticform-input w-full"
                placeholder="Website URL (https://)"
              />
              <span className="mauticform-errormsg text-red-500 text-sm mt-1" style={{ display: 'none' }}>This field is required</span>
            </div>

            {/* Submit Button */}
            <div
              id="mauticform_abacusdeskwordpresssitehacked_submit"
              className="mauticform-row mauticform-button-wrapper mauticform-field-6"
            >
              <button
                className="btn btn-brand mt-2 mauticform-button w-full"
                name="mauticform[submit]"
                value="1"
                id="mauticform_input_abacusdeskwordpresssitehacked_submit"
                type="submit"
              >
                Get a Free Report
              </button>
            </div>

          </div>
        </div>

        {/* Hidden Fields */}
        <input
          type="hidden"
          name="mauticform[formId]"
          id="mauticform_abacusdeskwordpresssitehacked_id"
          value="15"
        />
        <input
          type="hidden"
          name="mauticform[return]"
          id="mauticform_abacusdeskwordpresssitehacked_return"
          value=""
        />
        <input
          type="hidden"
          name="mauticform[formName]"
          id="mauticform_abacusdeskwordpresssitehacked_name"
          value="abacusdeskwordpresssitehacked"
        />

        <p className="text-xs text-neutral-500 mt-2">
          By submitting, you agree to our privacy policy and incident handling
          terms.
        </p>
      </form>

      <style jsx>{`
        .mauticform-error { margin-bottom: 10px; color: red; }
        .mauticform-message { margin-bottom: 10px; color: green; }
        .mauticform-errormsg { display: block; color: red; margin-top: 2px; }
      `}</style>
    </div>
  );
}