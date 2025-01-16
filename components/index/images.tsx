import { useEffect } from 'react';


export default function ImageSection() {
  // Script dynamisch hinzufügen
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://pretix.seti-gathering.net/widget/v1.en.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="bg-inherit">
      <div className="mx-auto px-6 max-w-screen-xl sm:py-6 lg:px-6">
        {/* Pretix Widget */}
        <div className="pretix-widget-container">
        <div className="pretix-widget-compat">
            event="https://pretix.seti-gathering.net/Fractaliens/SETI25/"
            single-item-select="button"
            // TypeScript lässt uns hier keine unbekannten Attribute zu, deswegen casten wir es zu 'any'
            </div>
        </div>

        {/* Falls JavaScript deaktiviert ist */}
        <noscript>
          <div className="pretix-widget">
            <div className="pretix-widget-info-message">
              JavaScript ist in Ihrem Browser deaktiviert. Um unseren Ticket-Shop ohne JavaScript aufzurufen, klicken Sie bitte{" "}
              <a
                target="_blank"
                rel="noopener"
                href="https://pretix.seti-gathering.net/Fractaliens/SETI25/"
              >
                hier
              </a>.
            </div>
          </div>
        </noscript>
      </div>
    </section>
  );
}
