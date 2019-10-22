import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {
  ParallaxImage,
  PageHeader,
  PageSection,
  ImageCard,
  HeaderBottomBorder,
} from '../components/page-components'

const SectionTitle = props => <div className="text-2xl">{props.children}.</div>
const Paragraph = props => <div className="container md:mx-auto mx-4 my-4">{props.children}</div>

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Privacy Policy" />
    <ParallaxImage height={300} />
    <PageHeader text="Privacy Policy" />
    <HeaderBottomBorder />
    <Paragraph>
      <SectionTitle>Welcome to our Privacy Policy</SectionTitle>
    </Paragraph>
    <Paragraph>Your privacy is critically important to us.</Paragraph>
    <Paragraph>
      It is Bardos Foundation's policy to respect your privacy regarding any information we may
      collect while operating our website and grant programs. This Privacy Policy applies to
      https://www.bardos.foundation (hereinafter, “us”, “we”, or “Website”) and all personally
      identifiable information collected as a result of participation in grant programs
      (hereinafter, “programs”). We respect your privacy and are committed to protecting personally
      identifiable information you may provide us. We have adopted this privacy policy ("Privacy
      Policy") to explain what information may be collected, how we use this information, and under
      what circumstances we may disclose the information to third parties.
    </Paragraph>
    <Paragraph>
      This Privacy Policy sets forth the general rules and policies governing your use of our
      Website and participation in grant programs. Depending on your specific activities, you may be
      required to agree to additional terms and conditions.
    </Paragraph>
    <Paragraph>
      <SectionTitle>Website Visitors</SectionTitle> Like most website operators, Bardos Foundation
      collects non-personally-identifying information of the sort that web browsers and servers
      typically make available, such as the browser type, language preference, referring site, and
      the date and time of each visitor request. Bardos Foundation's purpose in collecting
      non-personally identifying information is to better understand how Bardos Foundation's
      visitors use its website. From time to time, Bardos Foundation may release
      non-personally-identifying information in the aggregate, e.g., by publishing a report on
      trends in the usage of its website. Bardos Foundation also collects potentially
      personally-identifying information like Internet Protocol (IP) addresses for logged in users,
      users leaving comments on https://www.bardos.foundation posts, and users submitting form
      information. Bardos Foundation only discloses logged in user and commenter IP addresses under
      the same circumstances that it uses and discloses personally-identifying information as
      described below.
    </Paragraph>
    <Paragraph>
      <SectionTitle>Gathering of Data</SectionTitle>
      Certain visitors to Bardos Foundation's websites choose to interact with Bardos Foundation in
      ways that require Bardos Foundation to gather personally-identifying information. The amount
      and type of information that Bardos Foundation gathers depends on the nature of the
      interaction. For example, we ask visitors who sign up for a commenter account at
      https://www.bardos.foundation to provide an email address and password while applicants to a
      grant program will be asked to provide first name, last name, geographic location, school
      contact information, academic history, demographic information, and a personal statement.
    </Paragraph>
    <Paragraph>
      <SectionTitle>Disclosure Of Data</SectionTitle>
      Bardos Foundation may disclose your Personal Data in the good faith belief that such action is
      necessary to:
      <ul className="list-disc pl-10 mt-2">
        <li>To comply with a legal obligation</li>
        <li>To protect and defend the rights or property of Bardos Foundation</li>
        <li>
          To prevent or investigate possible wrongdoing in connection with our programs or services
        </li>
        <li>To protect the personal safety of our users or the public</li>
        <li>To protect against legal liability</li>
      </ul>
    </Paragraph>
    <Paragraph>
      <SectionTitle>Security</SectionTitle>
      The security of your Personal Information is important to us, but no method of transmission
      over the Internet, or method of electronic storage is 100% secure. While we strive to use
      commercially acceptable means to protect your Personal Information, we cannot guarantee its
      absolute security.
    </Paragraph>
    <Paragraph>
      <SectionTitle>Links To External Sites</SectionTitle>
      Our Service may contain links to external sites that are not operated by us. If you click on a
      third party link, you will be directed to that third party's site. We strongly advise you to
      review the Privacy Policy and terms and conditions of every site you visit. We have no control
      over, and assume no responsibility for the content, privacy policies or practices of any third
      party sites, products or services.
    </Paragraph>
    <Paragraph>
      <SectionTitle>Aggregated Statistics</SectionTitle>
      Bardos Foundation may collect statistics about the behavior of visitors to its website. Bardos
      Foundation may display this information publicly or provide it to others. However, Bardos
      Foundation does not disclose your personally-identifying information.
    </Paragraph>
    <Paragraph>
      <SectionTitle>Cookies</SectionTitle>
      To enrich and perfect your online experience, Bardos Foundation uses "Cookies", similar
      technologies and services provided by others to display personalized content, appropriate
      advertising and store your preferences on your computer. A cookie is a string of information
      that a website stores on a visitor's computer, and that the visitor's browser provides to the
      website each time the visitor returns. Bardos Foundation uses cookies to help Bardos
      Foundation identify and track visitors, their usage of https://www.bardos.foundation, and
      their website access preferences. Bardos Foundation visitors who do not wish to have cookies
      placed on their computers should set their browsers to refuse cookies before using Bardos
      Foundation's websites, with the drawback that certain features of Bardos Foundation's websites
      may not function properly without the aid of cookies. By continuing to navigate our website
      without changing your cookie settings, you hereby acknowledge and agree to Bardos Foundation's
      use of cookies.{' '}
    </Paragraph>
    <Paragraph>
      <SectionTitle>Children's Privacy</SectionTitle>
      We do not address anyone under the age of 13 ("Children"). We do not knowingly collect
      personally identifiable information from anyone under the age of 13. If you are a parent or
      guardian and you are aware that your Children have provided us with Personal Data, please
      contact us immediately. If we become aware that we have collected Personal Data from children
      without verification of parental consent, we take steps to remove that information from our
      servers.
    </Paragraph>
    <Paragraph>
      <SectionTitle>Privacy Policy Changes</SectionTitle>
      Although most changes are likely to be minor, Bardos Foundation may change its Privacy Policy
      from time to time, and at Bardos Foundation's sole discretion. Bardos Foundation encourages
      visitors to frequently check this page for any changes to its Privacy Policy. Your continued
      use of this site after any change in this Privacy Policy will constitute your acceptance of
      such change.
    </Paragraph>
    <Paragraph>
      <SectionTitle>Contact Information</SectionTitle>
      If you have any questions about this Privacy Policy, please contact us via email,
      <a href="mailto:privacy@bardos.foundation"> privacy@bardos.foundation</a>.
    </Paragraph>
  </Layout>
)

export default AboutPage
