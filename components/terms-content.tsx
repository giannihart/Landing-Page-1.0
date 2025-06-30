import { Badge } from "@/components/ui/badge"

function TermsContent() {
  return (
    <div className="w-full py-16 lg:py-24 bg-[#111111] text-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex text-center justify-center items-center gap-12 flex-col max-w-4xl mx-auto font-inter">
          <div className="space-y-6">
            <Badge className="bg-white text-[#111111] hover:bg-white/90">Legal</Badge>
            <div className="flex gap-4 flex-col">
              <h1 className="text-4xl font-semibold lg:text-5xl text-white">Terms and Conditions</h1>
              <p className="text-lg leading-relaxed tracking-tight text-gray-400 max-w-xl text-center mx-auto">
                Last updated June 20, 2025
              </p>
            </div>
          </div>

          {/* Terms Content */}
          <div className="w-full">
            <div className="min-h-[24rem] list-none">
              <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                <div className="relative flex h-full flex-col gap-6 overflow-hidden rounded-xl border-[0.75px] bg-[#111111] p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-8 text-left">
                  <div className="prose prose-invert max-w-none">
                    <h2 className="text-white text-xl font-semibold mb-4">AGREEMENT TO OUR LEGAL TERMS</h2>

                    <p className="text-gray-300 mb-4">
                      We are Devscribe, Inc, a company registered in California, United States at 872 Higuera st, San
                      Luis Obispo, CA 93410.
                    </p>

                    <p className="text-gray-300 mb-4">
                      We operate the website{" "}
                      <a href="http://www.devscribeai.com" className="text-blue-400 hover:text-blue-300">
                        http://www.devscribeai.com
                      </a>{" "}
                      (the &quot;Site&quot;), as well as any other related products and services that refer or link to these legal
                      terms (the &quot;Legal Terms&quot;) (collectively, the &quot;Services&quot;).
                    </p>

                    <p className="text-gray-300 mb-4">
                      You can contact us by phone at 8059314123, email at Team@devscribeai.com, or by mail to 872
                      Higuera st, San Luis Obispo, CA 93410, United States.
                    </p>

                    <p className="text-gray-300 mb-6">
                      These Legal Terms constitute a legally binding agreement made between you, whether personally or
                      on behalf of an entity (&quot;you&quot;), and Devscribe, Inc, concerning your access to and use of the
                      Services. You agree that by accessing the Services, you have read, understood, and agreed to be
                      bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE
                      EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                    </p>

                    <h2 className="text-white text-xl font-semibold mb-4">TABLE OF CONTENTS</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8 text-sm">
                      <div className="space-y-1">
                        <p>
                          <a href="#services" className="text-blue-400 hover:text-blue-300">
                            1. OUR SERVICES
                          </a>
                        </p>
                        <p>
                          <a href="#ip" className="text-blue-400 hover:text-blue-300">
                            2. INTELLECTUAL PROPERTY RIGHTS
                          </a>
                        </p>
                        <p>
                          <a href="#userreps" className="text-blue-400 hover:text-blue-300">
                            3. USER REPRESENTATIONS
                          </a>
                        </p>
                        <p>
                          <a href="#userreg" className="text-blue-400 hover:text-blue-300">
                            4. USER REGISTRATION
                          </a>
                        </p>
                        <p>
                          <a href="#purchases" className="text-blue-400 hover:text-blue-300">
                            5. PURCHASES AND PAYMENT
                          </a>
                        </p>
                        <p>
                          <a href="#subscriptions" className="text-blue-400 hover:text-blue-300">
                            6. SUBSCRIPTIONS
                          </a>
                        </p>
                        <p>
                          <a href="#prohibited" className="text-blue-400 hover:text-blue-300">
                            7. PROHIBITED ACTIVITIES
                          </a>
                        </p>
                        <p>
                          <a href="#ugc" className="text-blue-400 hover:text-blue-300">
                            8. USER GENERATED CONTRIBUTIONS
                          </a>
                        </p>
                        <p>
                          <a href="#license" className="text-blue-400 hover:text-blue-300">
                            9. CONTRIBUTION LICENSE
                          </a>
                        </p>
                        <p>
                          <a href="#thirdparty" className="text-blue-400 hover:text-blue-300">
                            10. THIRD-PARTY WEBSITES AND CONTENT
                          </a>
                        </p>
                        <p>
                          <a href="#sitemanage" className="text-blue-400 hover:text-blue-300">
                            11. SERVICES MANAGEMENT
                          </a>
                        </p>
                        <p>
                          <a href="#ppno" className="text-blue-400 hover:text-blue-300">
                            12. PRIVACY POLICY
                          </a>
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p>
                          <a href="#terms" className="text-blue-400 hover:text-blue-300">
                            13. TERM AND TERMINATION
                          </a>
                        </p>
                        <p>
                          <a href="#modifications" className="text-blue-400 hover:text-blue-300">
                            14. MODIFICATIONS AND INTERRUPTIONS
                          </a>
                        </p>
                        <p>
                          <a href="#law" className="text-blue-400 hover:text-blue-300">
                            15. GOVERNING LAW
                          </a>
                        </p>
                        <p>
                          <a href="#disputes" className="text-blue-400 hover:text-blue-300">
                            16. DISPUTE RESOLUTION
                          </a>
                        </p>
                        <p>
                          <a href="#corrections" className="text-blue-400 hover:text-blue-300">
                            17. CORRECTIONS
                          </a>
                        </p>
                        <p>
                          <a href="#disclaimer" className="text-blue-400 hover:text-blue-300">
                            18. DISCLAIMER
                          </a>
                        </p>
                        <p>
                          <a href="#liability" className="text-blue-400 hover:text-blue-300">
                            19. LIMITATIONS OF LIABILITY
                          </a>
                        </p>
                        <p>
                          <a href="#indemnification" className="text-blue-400 hover:text-blue-300">
                            20. INDEMNIFICATION
                          </a>
                        </p>
                        <p>
                          <a href="#userdata" className="text-blue-400 hover:text-blue-300">
                            21. USER DATA
                          </a>
                        </p>
                        <p>
                          <a href="#electronic" className="text-blue-400 hover:text-blue-300">
                            22. ELECTRONIC COMMUNICATIONS
                          </a>
                        </p>
                        <p>
                          <a href="#california" className="text-blue-400 hover:text-blue-300">
                            23. CALIFORNIA USERS AND RESIDENTS
                          </a>
                        </p>
                        <p>
                          <a href="#misc" className="text-blue-400 hover:text-blue-300">
                            24. MISCELLANEOUS
                          </a>
                        </p>
                        <p>
                          <a href="#contact" className="text-blue-400 hover:text-blue-300">
                            25. CONTACT US
                          </a>
                        </p>
                      </div>
                    </div>

                    <h2 id="services" className="text-white text-xl font-semibold mb-4">
                      1. OUR SERVICES
                    </h2>
                    <p className="text-gray-300 mb-4">
                      The information provided when using the Services is not intended for distribution to or use by any
                      person or entity in any jurisdiction or country where such distribution or use would be contrary
                      to law or regulation or which would subject us to any registration requirement within such
                      jurisdiction or country.
                    </p>

                    <h2 id="ip" className="text-white text-xl font-semibold mb-4">
                      2. INTELLECTUAL PROPERTY RIGHTS
                    </h2>
                    <p className="text-gray-300 mb-4">
                      We are the owner or the licensee of all intellectual property rights in our Services, including
                      all source code, databases, functionality, software, website designs, audio, video, text,
                      photographs, and graphics in the Services (collectively, the &quot;Content&quot;), as well as the
                      trademarks, service marks, and logos contained therein (the &quot;Marks&quot;).
                    </p>

                    <h2 id="userreps" className="text-white text-xl font-semibold mb-4">
                      3. USER REPRESENTATIONS
                    </h2>
                    <p className="text-gray-300 mb-4">
                      By using the Services, you represent and warrant that: (1) all registration information you submit
                      will be true, accurate, current, and complete; (2) you will maintain the accuracy of such
                      information and promptly update such registration information as necessary; (3) you have the legal
                      capacity and you agree to comply with these Legal Terms; (4) you are not under the age of 13; (5)
                      you are not a minor in the jurisdiction in which you reside, or if a minor, you have received
                      parental permission to use the Services; (6) you will not access the Services through automated or
                      non-human means; (7) you will not use the Services for any illegal or unauthorized purpose; and
                      (8) your use of the Services will not violate any applicable law or regulation.
                    </p>

                    <h2 id="purchases" className="text-white text-xl font-semibold mb-4">
                      5. PURCHASES AND PAYMENT
                    </h2>
                    <p className="text-gray-300 mb-4">
                      We accept the following forms of payment: Visa, Mastercard, American Express, Discover, and
                      PayPal. You agree to provide current, complete, and accurate purchase and account information for
                      all purchases made via the Services. All payments shall be in US dollars.
                    </p>

                    <h2 id="prohibited" className="text-white text-xl font-semibold mb-4">
                      7. PROHIBITED ACTIVITIES
                    </h2>
                    <p className="text-gray-300 mb-4">
                      You may not access or use the Services for any purpose other than that for which we make the
                      Services available. The Services may not be used in connection with any commercial endeavors
                      except those that are specifically endorsed or approved by us.
                    </p>

                    <h2 id="disclaimer" className="text-white text-xl font-semibold mb-4">
                      18. DISCLAIMER
                    </h2>
                    <p className="text-gray-300 mb-4">
                      THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE
                      SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL
                      WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF.
                    </p>

                    <h2 id="contact" className="text-white text-xl font-semibold mb-4">
                      25. CONTACT US
                    </h2>
                    <div className="text-gray-300 space-y-2">
                      <p>
                        <strong>Devscribe, Inc</strong>
                      </p>
                      <p>872 Higuera st</p>
                      <p>San Luis Obispo, CA 93410</p>
                      <p>United States</p>
                      <p>Phone: 8059314123</p>
                      <p>Email: team@devscribeai.com</p>
                    </div>

                    <div className="mt-8 p-4 bg-gray-800/50 rounded-lg">
                      <p className="text-sm text-gray-400">
                        <strong>Note:</strong> This is a condensed version of our full Terms and Conditions. The
                        complete document contains additional sections covering all aspects of our legal terms. By using
                        our services, you agree to be bound by the complete terms as outlined above.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { TermsContent }
