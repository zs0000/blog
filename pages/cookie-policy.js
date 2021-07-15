import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";
export default function CookiePolicy() {
    return(
        <Layout>
            <Head>
            <title>Cookie Policy - ReptiKeep</title>
          <meta
        name="description"
        content={`Cookie Policy page for ReptiKeep`}
      />
            </Head>
            <Container>
                <main>
                    <div className="w-auto">
                        <div className="mx-8">
                            <h2 className="text-center text-6xl font-bold my-2 mb-8 text-green-700 md:text-7xl border-b">Cookie Policy</h2>
                    <h3 className="text-center text-4xl antialiased font-semibold text-green-700 my-2">About this cookie policy.</h3>
<p className="text-justify text-lg tracking-tight leading">
This Cookie Policy explains what cookies are and how we use them. You should read this policy to understand what cookies are, how we use them, the types of cookies we use i.e, the information we collect using cookies and how that information is used and how to control the cookie preferences. For further information on how we use, store and keep your personal data secure, see our Privacy Policy.

You can at any time change or withdraw your consent from the Cookie Declaration on our website.

Learn more about who we are, how you can contact us and how we process personal data in our Privacy Policy.

Your consent applies to the following domains: reptikeep.com
<br/>
<br/>
[user_consent_state]
</p>
<h3 className="text-center text-4xl antialiased font-semibold text-green-700 my-2">What are cookies ?</h3>
<p className="text-justify text-lg tracking-tight leading">
Cookies are small text files that are used to store small pieces of information. The cookies are stored on your device when the website is loaded on your browser. These cookies help us make the website function properly, make the website more secure, provide better user experience, and understand how the website performs and to analyze what works and where it needs improvement.
</p>
<h3 className="text-center text-4xl antialiased font-semibold text-green-700 my-2">How do we use cookies ?</h3>
<p className="text-justify text-lg tracking-tight leading">
As most of the online services, our website uses cookies first-party and third-party cookies for a number of purposes. The first-party cookies are mostly necessary for the website to function the right way, and they do not collect any of your personally identifiable data.

The third-party cookies used on our websites are used mainly for understanding how the website performs, how you interact with our website, keeping our services secure, providing advertisements that are relevant to you, and all in all providing you with a better and improved user experience and help speed up your future interactions with our website.
</p>
<h3 className="text-center text-4xl antialiased font-semibold text-green-700 my-2">What types of cookies do we use ?</h3>
<p className="text-justify text-lg tracking-tight leading">
The cookies used on our website are grouped into the following categories.
<br/>
<br/>
[cookie_category]
<br/>
<br/>
The below list details the cookies used in our website.
<br/>
<br/>
[cookie_audit_category columns=”cookie,description”]
</p>
<h3 className="text-center text-4xl antialiased font-semibold text-green-700 my-2">How can I control the cookie preferences ?</h3>
<p className="text-justify text-lg tracking-tight leading pb-8">
You can manage your cookies preferences by clicking on the “Settings” button and enabling or disabling the cookie categories on the popup according to your preferences.

Should you decide to change your preferences later through your browsing session, you can click on the “Privacy & Cookie Policy” tab on your screen. This will display the consent notice again enabling you to change your preferences or withdraw your consent entirely.

In addition to this, different browsers provide different methods to block and delete cookies used by websites. You can change the settings of your browser to block/delete the cookies. To find out more out more on how to manage and delete cookies, visit wikipedia.org, www.allaboutcookies.org.
<br/>
<br/>
[webtoffee_powered_by]
  </p>
                    </div>
                    </div>
                </main>
            </Container>
        </Layout>
    );
}