

const Footer = () => {
  
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
  <div className="mx-auto max-w-screen-xl text-center">
      <a href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
      COUNSELING AND WELLNESS SPECIALITY   
      </a>
      <p className=" my-6 text-gray-500 dark:text-gray-400">Fearless Authentic Wellness Consultancy uses Person Centered approach to deliver support that
gradually empowers individuals, families, groups and organizations to make informed life changing
decisions. Additionally, we apply cognitive behavioral therapy (CBT) and techniques to address mental
health conditions and improve clients’ outcomes during a crisis. We have a special interest in cognitive
behavioral therapy, Behavioral Modification and client Centered Counseling.
</p>
      <ul className="hidden flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
          </li>
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Premium</a>
          </li>
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">Campaigns</a>
          </li>
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Blog</a>
          </li>
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Affiliate Program</a>
          </li>
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">FAQs</a>
          </li>
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Contact</a>
          </li>
      </ul>
      <section className="bg-white dark:bg-inherit">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="hidden mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">Sign up for our newsletter</h2>
          <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
          <form action="#">
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div className="relative w-full">
                      <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      </div>
                      <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required />
                  </div>
                  <div>
                      <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
                  </div>
              </div>
              <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">We care about the protection of your data. <a href="#" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</a>.</div>
          </form>
      </div>
  </div>
</section>

      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">Fearless Authentic Minds</a>. All Rights Reserved.</span>
  </div>
</footer>

  );
};

export default Footer;