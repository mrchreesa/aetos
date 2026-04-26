import React from "react";

const EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.3775609447466!2d-0.11524662307119507!3d51.56131167182556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761bd37b40c27f%3A0x2cbcfcdf63cb47d3!2sAetos!5e0!3m2!1sen!2suk!4v1777208442610!5m2!1sen!2suk";

function Maps() {
  return (
    <iframe
      title="Aetos restaurant on Google Maps"
      src={EMBED_SRC}
      width="100%"
      height="450"
      style={{ border: 0, display: "block" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}

export default React.memo(Maps);
