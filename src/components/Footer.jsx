 
function Footer() {
  return (
    <div className="footer bg-white shadow mt-20" id="social">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="py-4">
          &copy; 2025 Tailwind CSS. All rights reserved
        </p>
        <div className="social-footer flex gap-10">
          <i className="ri-facebook-circle-fill text-2xl"></i>
          <i className="ri-instagram-fill text-2xl"></i>
          <i className="ri-twitter-fill text-2xl"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer
