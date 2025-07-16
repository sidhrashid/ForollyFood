// // src/components/Seo.jsx
// import  Helmet  from "react-helmet";

// const Seo = ({ title, description, keywords, canonical }) => {
//   return (
//     <Helmet>
//       {title && <title>{title}</title>}
//       {description && <meta name="description" content={description} />}
//       {keywords && <meta name="keywords" content={keywords} />}
//       {canonical && <link rel="canonical" href={canonical} />}
//       <meta name="robots" content="index, follow" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />

//       {/* Open Graph for social sharing */}
//       {title && <meta property="og:title" content={title} />}
//       {description && <meta property="og:description" content={description} />}
//       {canonical && <meta property="og:url" content={canonical} />}
//     </Helmet>
//   );
// };

// export default Seo;
