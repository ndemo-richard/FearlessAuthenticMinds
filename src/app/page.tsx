import Image from 'next/image'

function Home() {
  return (
    <main className="scroll-smooth pb-5 flex min-h-screen flex-col items-center justify-between bg-white dark:bg-gray-800">

<section className="bg-inherit">
    <div className="grid gap-8 max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 sm:gap-8">
        <div className="mr-auto place-self-center lg:col-span-7 font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white">FEARLESS AUTHENTIC WELLNESS</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Nurturing Minds, Transforming Lives, One Authentic Step at a Time</p>
           <p className="mb-4 max-w-2xl mb-6 ">At Fearless Authentic Wellness Consultancy, we&#39;re dedicated to leveraging the intersection of mental
health, innovation, and personal empowerment to unlock long-lasting well-being and drive positive
transformation in individuals and organizations alike
To achieve this, we aim at providing mental health and psychosocial support services to both individual
and groups as well as undertake mental health consultancy for organizations. Our focus is on the
following key areas:</p>
<ul className="mb-4 max-w-2xl mb-6">
<li>❖ Providing Counseling Services to Individuals and Groups</li>
<li>❖ Conducting Mental Health talks to organizations</li>
<li>❖ Advocating for mental health and self-awareness</li>
<li>❖ Providing Consultancy Services on developing mental health programmes &amp; wellness policies</li>
<li>❖ Advocacy on the right to mental Health.</li>
</ul>

            
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex rounded-xl bg-inherit">
            <img className="rounded-one"src="/images/two.jpg" alt="mockup" />
        </div>                
    </div>
</section>
      
      <section className="mt-5 bg-white dark:bg-gray-900" id='about'>
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">FEARLESS AUTHENTIC WELLNESS CONSULTANCY</h2>
            <p className="mb-4">Living in a world that most often exerts pressure on us to ‘’fit in’’ can be overwhelming and many like
are sucked into believing that they actually need to ‘’fit in’’ to feel like they belong. So, what will happen
if we actually be OURSELVES instead of trying so hard to ‘’fit in’’ in a world that is constantly trying to
make us something else?
FEARLESS AUTHENTIC WELLNESS CONSULTANCY is here to help you become fearless authentic; to be
yourself and live a life that not only looks good on the outside but also feels good on the inside. To be
REAL, be true to your values regardless of what the society and others think or expect of you!
Embrace Your Authenticity Fearlessly for a Fulfilling life!
</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src="/images/one.jpeg" alt=" content 1" />
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="/images/three.jpeg" alt="office content 2" />
        </div>
    </div>
</section>

<section className="mt-5 bg-white dark:bg-gray-900" id="service">
  <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 font-light text-gray-500 sm:text-lg dark:text-gray-400">
      <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Services</h2>
      </div>
      <ul className="mb-4">
          <li>❖Individual Counseling</li>
          <li> ❖ Couples counseling and Family therapy</li>
          <li>❖ Group counseling</li>
          <li>❖ Child and Adolescents counseling</li>
          <li> ❖ Personal growth and development</li>
          <li>❖ Coaching and Mentorship</li>
        </ul>
        
        <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-gray-700 dark:text-white">Corporate Mental Health Wellness</h2>
<p className='mb-4'>Enhances the strengthening of internal controls on Occupation related risks such as; work stress,
emotional exhaustion, burnout among others. Therefore, it is vital to create and enabling environment
through which employees are able to safely express and share experiences encountered in the course of
work. Mental health wellness in an organization further empowers employees with basic counseling and
coping skills for safe engagement with complainants and avoid vicarious trauma.</p>

<ul>
<li>Customized Mental Health and Wellness Training
<ul>
<li>Capacity Building</li>
<li>• Work life balance</li>
<li>• Conflict resolution in the workplace</li>
<li>• Emotional intelligence</li>
</ul></li>
<li>Debriefing
<ul>
<li>• Mental Health Talks</li>
<li>• Motivational Talks</li>
<li>• Personal growth and development at the workplace</li>
</ul></li>
<li>Workplace counselling</li>
<li>Organizational Change &amp; Growth</li>
</ul>


        
     
    
    
  </div>
</section>

<section className="bg-white dark:bg-gray-900" id='contact'>
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-5xl dark:text-white">Let&apos;s find more that brings us together.</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Reach Out for Counseling Session Details: Time, Prices, and Supportive Guidance Await!</p>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
        
                <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
  </svg>
                    <p className="h-11 text-sky-500">
                    fearlessauthenticwellness@gmail.com
                    </p>                       
                </a>
                <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
    <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
  </svg>
                    <p className="h-11 text-sky-500">
                    0102762429
                    </p>                                                   
                </a>         
            </div>
        </div> 
    </div>
</section>
    </main>
  )
}
export default Home

