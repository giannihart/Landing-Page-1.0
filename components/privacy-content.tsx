import { Badge } from "@/components/ui/badge"

function PrivacyContent() {
  return (
    <div className="w-full py-16 lg:py-24 bg-[#111111] text-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex text-center justify-center items-center gap-12 flex-col max-w-4xl mx-auto font-inter">
          <div className="space-y-6">
            <Badge className="bg-white text-[#111111] hover:bg-white/90">Legal</Badge>
            <div className="flex gap-4 flex-col">
              <h1 className="text-4xl font-semibold lg:text-5xl text-white">Privacy Policy</h1>
              <p className="text-lg leading-relaxed tracking-tight text-gray-400 max-w-xl text-center mx-auto">
                Last updated June 27, 2025
              </p>
            </div>
          </div>

          {/* Privacy Content */}
          <div className="w-full">
            <div className="min-h-[24rem] list-none">
              <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                <div className="relative flex h-full flex-col gap-6 overflow-hidden rounded-xl border-[0.75px] bg-[#111111] p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-8 text-left">
                  <div className="prose prose-invert max-w-none">
                    <h2 className="text-white text-xl font-semibold mb-4">PRIVACY NOTICE</h2>

                    <p className="text-gray-300 mb-4">
                      This Privacy Notice for <strong>Devscribe, Inc</strong>, a company registered in California,
                      United States at 872 Higuera st, San Luis Obispo, CA 93410, describes how and why we might access,
                      collect, store, use, and/or share (&quot;process&quot;) your personal information when you use our services
                      (&quot;Services&quot;).
                    </p>

                    <p className="text-gray-300 mb-4">
                      We operate the website{" "}
                      <a href="http://www.devscribeai.com" className="text-blue-400 hover:text-blue-300">
                        http://www.devscribeai.com
                      </a>{" "}
                      (the &quot;Site&quot;), as well as any other related products and services that refer or link to this
                      Privacy Notice (collectively, the &quot;Services&quot;).
                    </p>

                    <p className="text-gray-300 mb-4">
                      You can contact us by phone at 8059314123, email at team@devscribeai.com, or by mail to 872
                      Higuera st, San Luis Obispo, CA 93410, United States.
                    </p>

                    <p className="text-gray-300 mb-6">
                      <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your
                      privacy rights and choices. If you do not agree with our policies and practices, please do not use
                      our Services. If you still have any questions or concerns, please contact us at
                      team@devscribeai.com.
                    </p>

                    <h2 className="text-white text-xl font-semibold mb-4">TABLE OF CONTENTS</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8 text-sm">
                      <div className="space-y-1">
                        <p>
                          <a href="#collect" className="text-blue-400 hover:text-blue-300">
                            1. WHAT INFORMATION DO WE COLLECT?
                          </a>
                        </p>
                        <p>
                          <a href="#process" className="text-blue-400 hover:text-blue-300">
                            2. HOW DO WE PROCESS YOUR INFORMATION?
                          </a>
                        </p>
                        <p>
                          <a href="#legal" className="text-blue-400 hover:text-blue-300">
                            3. WHAT LEGAL BASES DO WE RELY ON?
                          </a>
                        </p>
                        <p>
                          <a href="#share" className="text-blue-400 hover:text-blue-300">
                            4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                          </a>
                        </p>
                        <p>
                          <a href="#cookies" className="text-blue-400 hover:text-blue-300">
                            5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                          </a>
                        </p>
                        <p>
                          <a href="#ai" className="text-blue-400 hover:text-blue-300">
                            6. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?
                          </a>
                        </p>
                        <p>
                          <a href="#social" className="text-blue-400 hover:text-blue-300">
                            7. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
                          </a>
                        </p>
                        <p>
                          <a href="#retain" className="text-blue-400 hover:text-blue-300">
                            8. HOW LONG DO WE KEEP YOUR INFORMATION?
                          </a>
                        </p>
                        <p>
                          <a href="#safe" className="text-blue-400 hover:text-blue-300">
                            9. HOW DO WE KEEP YOUR INFORMATION SAFE?
                          </a>
                        </p>
                        <p>
                          <a href="#minors" className="text-blue-400 hover:text-blue-300">
                            10. DO WE COLLECT INFORMATION FROM MINORS?
                          </a>
                        </p>
                        <p>
                          <a href="#rights" className="text-blue-400 hover:text-blue-300">
                            11. WHAT ARE YOUR PRIVACY RIGHTS?
                          </a>
                        </p>
                        <p>
                          <a href="#dnt" className="text-blue-400 hover:text-blue-300">
                            12. CONTROLS FOR DO-NOT-TRACK FEATURES
                          </a>
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p>
                          <a href="#us-rights" className="text-blue-400 hover:text-blue-300">
                            13. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                          </a>
                        </p>
                        <p>
                          <a href="#other-rights" className="text-blue-400 hover:text-blue-300">
                            14. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?
                          </a>
                        </p>
                        <p>
                          <a href="#updates" className="text-blue-400 hover:text-blue-300">
                            15. DO WE MAKE UPDATES TO THIS NOTICE?
                          </a>
                        </p>
                        <p>
                          <a href="#contact" className="text-blue-400 hover:text-blue-300">
                            16. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                          </a>
                        </p>
                        <p>
                          <a href="#review" className="text-blue-400 hover:text-blue-300">
                            17. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
                          </a>
                        </p>
                      </div>
                    </div>

                    <h2 id="collect" className="text-white text-xl font-semibold mb-4">
                      1. WHAT INFORMATION DO WE COLLECT?
                    </h2>
                    <p className="text-gray-300 mb-4">
                      <strong>Personal information you disclose to us</strong>
                    </p>
                    <p className="text-gray-300 mb-4">
                      <em>In Short: We collect personal information that you provide to us.</em>
                    </p>
                    <p className="text-gray-300 mb-4">
                      We collect personal information that you voluntarily provide to us when you register on the
                      Services, express an interest in obtaining information about us or our products and Services, when
                      you participate in activities on the Services, or otherwise when you contact us.
                    </p>

                    <h2 id="process" className="text-white text-xl font-semibold mb-4">
                      2. HOW DO WE PROCESS YOUR INFORMATION?
                    </h2>
                    <p className="text-gray-300 mb-4">
                      <em>
                        In Short: We process your information to provide, improve, and administer our Services,
                        communicate with you, for security and fraud prevention, and to comply with law.
                      </em>
                    </p>
                    <p className="text-gray-300 mb-4">
                      We process your personal information for a variety of reasons, depending on how you interact with
                      our Services, including to facilitate account creation and authentication, deliver and facilitate
                      delivery of services to the user, respond to user inquiries/offer support to users, and to send
                      administrative information to you.
                    </p>

                    <h2 id="share" className="text-white text-xl font-semibold mb-4">
                      4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                    </h2>
                    <p className="text-gray-300 mb-4">
                      <em>
                        In Short: We may share information in specific situations described in this section and/or with
                        the following categories of third parties.
                      </em>
                    </p>
                    <p className="text-gray-300 mb-4">
                      We may need to share your personal information in the following situations: Business Transfers,
                      Business Partners, and Other Users when you share personal information or otherwise interact in
                      the public areas with other users.
                    </p>

                    <h2 id="cookies" className="text-white text-xl font-semibold mb-4">
                      5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                    </h2>
                    <p className="text-gray-300 mb-4">
                      <em>
                        In Short: We may use cookies and other tracking technologies to collect and store your
                        information.
                      </em>
                    </p>
                    <p className="text-gray-300 mb-4">
                      We may use cookies and similar tracking technologies (like web beacons and pixels) to access or
                      store information. Specific information about how we use such technologies and how you can refuse
                      certain cookies is set out in our Cookie Notice.
                    </p>

                    <h2 id="ai" className="text-white text-xl font-semibold mb-4">
                      6. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?
                    </h2>
                    <p className="text-gray-300 mb-4">
                      <em>
                        In Short: We offer products, features, or tools powered by artificial intelligence, machine
                        learning, or similar technologies.
                      </em>
                    </p>
                    <p className="text-gray-300 mb-4">
                      As part of our Services, we offer products, features, or tools powered by artificial intelligence,
                      machine learning, or similar technologies (collectively, &quot;AI Products&quot;). These tools are designed
                      to enhance your experience and provide you with innovative solutions. The terms in this Privacy
                      Notice govern your use of the AI Products within our Services.
                    </p>

                    <h2 id="retain" className="text-white text-xl font-semibold mb-4">
                      8. HOW LONG DO WE KEEP YOUR INFORMATION?
                    </h2>
                    <p className="text-gray-300 mb-4">
                      <em>
                        In Short: We keep your information for as long as necessary to fulfill the purposes outlined in
                        this Privacy Notice unless otherwise required by law.
                      </em>
                    </p>
                    <p className="text-gray-300 mb-4">
                      We will only keep your personal information for as long as it is necessary for the purposes set
                      out in this Privacy Notice, unless a longer retention period is required or permitted by law (such
                      as tax, accounting, or other legal requirements).
                    </p>

                    <h2 id="safe" className="text-white text-xl font-semibold mb-4">
                      9. HOW DO WE KEEP YOUR INFORMATION SAFE?
                    </h2>
                    <p className="text-gray-300 mb-4">
                      <em>
                        In Short: We aim to protect your personal information through a system of organizational and
                        technical security measures.
                      </em>
                    </p>
                    <p className="text-gray-300 mb-4">
                      We have implemented appropriate and reasonable technical and organizational security measures
                      designed to protect the security of any personal information we process. However, despite our
                      safeguards and efforts to secure your information, no electronic transmission over the Internet or
                      information storage technology can be guaranteed to be 100% secure.
                    </p>

                    <h2 id="rights" className="text-white text-xl font-semibold mb-4">
                      11. WHAT ARE YOUR PRIVACY RIGHTS?
                    </h2>
                    <p className="text-gray-300 mb-4">
                      <em>
                        In Short: Depending on your state of residence in the US or in some regions, such as the
                        European Economic Area (EEA), United Kingdom (UK), Switzerland, and Canada, you have rights that
                        allow you greater access to and control over your personal information.
                      </em>
                    </p>
                    <p className="text-gray-300 mb-4">
                      In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under
                      applicable data protection laws. These may include the right (i) to request access and obtain a
                      copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the
                      processing of your personal information; (iv) if applicable, to data portability; and (v) not to
                      be subject to automated decision-making.
                    </p>

                    <h2 id="us-rights" className="text-white text-xl font-semibold mb-4">
                      13. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                    </h2>
                    <p className="text-gray-300 mb-4">
                      <em>
                        In Short: If you are a resident of California, Colorado, Connecticut, Delaware, Florida,
                        Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey,
                        Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have the right to request
                        access to and receive details about the personal information we maintain about you and how we
                        have processed it, correct inaccuracies, get a copy of, or delete your personal information.
                      </em>
                    </p>

                    <h2 id="updates" className="text-white text-xl font-semibold mb-4">
                      15. DO WE MAKE UPDATES TO THIS NOTICE?
                    </h2>
                    <p className="text-gray-300 mb-4">
                      <em>
                        In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.
                      </em>
                    </p>
                    <p className="text-gray-300 mb-4">
                      We may update this Privacy Notice from time to time. The updated version will be indicated by an
                      updated &quot;Revised&quot; date and the updated version will be effective as soon as it is accessible.
                    </p>

                    <h2 id="contact" className="text-white text-xl font-semibold mb-4">
                      16. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
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

                    <h2 id="review" className="text-white text-xl font-semibold mb-4">
                      17. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
                    </h2>
                    <p className="text-gray-300 mb-4">
                      Based on the applicable laws of your country or state of residence in the US, you may have the
                      right to request access to the personal information we collect from you, details about how we have
                      processed it, correct inaccuracies, or delete your personal information.
                    </p>

                    <div className="mt-8 p-4 bg-gray-800/50 rounded-lg">
                      <p className="text-sm text-gray-400">
                        <strong>Note:</strong> This is a condensed version of our full Privacy Policy. The complete
                        document contains additional sections covering all aspects of our privacy practices. By using
                        our services, you agree to be bound by the complete privacy policy as outlined above.
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

export { PrivacyContent }
