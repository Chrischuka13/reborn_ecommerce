import React from 'react'

const Terms = () => {
    const terms = [
        {title: "WEBSITE USE", content: "This website and all content is provided for general informational and commercial purposes related to e-commerce website templates. You agree to use this website in compliance with all applicable laws and regulations."},
        {title: "ONLINE STORE TERMS", content: "By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws)."},
        {title: " GENERAL CONDITIONS", content: "We reserve the right to refuse service to anyone for any reason at any time.You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices.You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms."},
        {title: "MODIFICATIONS TO THE SERVICE AND PRICES", content: "Prices for our products are subject to change without notice.We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service."},
        {title: "PRODUCTS OR SERVICES (if applicable)", content: "Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited."},
        {title: "PERSONAL INFORMATION", content: "Your submission of personal information through the store is governed by our Privacy Policy. To view our Privacy Policy."},
        {title: " ERRORS, INACCURACIES AND OMISSIONS", content: "Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order).We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated."},
        {title: "TERMINATION", content: "The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof)."},
        {title: "CHANGES TO TERMS OF SERVICE", content: "You can review the most current version of the Terms of Service at any time at this page.We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes."},
        {title: "CONTACT INFORMATION", content: "Questions about the Terms of Service should be sent to us at info@rebornstores.com."},
    ]

  return (
    <main>
        <section className='w-11/12 container mx-auto py-16'>
            <div>
                <h1 className='text-[48px] font-bold mt-12 mb-6'>TERMS OF SERVICE</h1>
                {terms.map((term, index)=>(
                    <div key={index}>
                        <h3 className='text-2xl font-medium mb-2'>{term.title}</h3>
                        <p className='mb-8'>{term.content}</p>
                    </div>
                ))}
            </div>
        </section>
    </main>
  )
}

export default Terms