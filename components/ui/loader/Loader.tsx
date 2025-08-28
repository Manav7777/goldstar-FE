import "./Loader.css"
const Loader = () => {
  return (
    <div className="preloader-wrapper">
      <div className="preloader-content">
        <img
          src={`${process.env.NEXT_PUBLIC_IMAGE_SERVICE_URL}preloader-goldstar.webp`}
          alt="GoldStar preloader Logo"
          className="preloader-logo"
          loading="lazy"
        />
        <p className="preloader-text h6">Loading...</p>
      </div>
    </div>
  )
}

export default Loader