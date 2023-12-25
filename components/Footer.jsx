import React from "react";

const Footer = () => {
  return (
    <div className="bg-red-100">
    <div className="flex justify-between  items-center mt-10  px-10">
      <img src={"/logo.png"} alt="logo" width={100} height={100} />

      <div className="flex justify-center items-center flex-wrap gap-5">
        <div class="facebook">
          <div class="logo">
            <a
              data-title="Facebook"
              href="https://facebook.com/dryfruitdelights23"
              target="_blank"
              rel="noopener noreferrer nofollow"
              previewlistener="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0008ff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>
        <div class="instagram">
          <div class="logo">
            <a
              data-title="Instagram"
              href="https://instagram.com/_dryfruitdelights"
              target="_blank"
              rel="noopener noreferrer nofollow"
              previewlistener="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ab3665" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
        </div>
        <div class="youtube">
          <div class="logo">
            <a
              data-title="YouTube"
              href="https://youtube.com/@dryfruitdelights"
              target="_blank"
              rel="noopener noreferrer nofollow"
              previewlistener="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c20f0f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
            </a>
          </div>
        </div>
        
      </div>
    </div>
    <p className="text-center text-orange-950">&copy; 2024 DryFruitDelights. All rights reserved.</p>
    </div>
  );
};

export default Footer;
