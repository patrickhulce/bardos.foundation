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

export const query = graphql`
  query {
    bardosFamily: file(relativePath: {eq: "bardos-reunion.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    denesAgota1957: file(relativePath: {eq: "denes-agota-1957.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    denesAgota: file(relativePath: {eq: "denes-agota.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    agota: file(relativePath: {eq: "agota-portrait.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    denes: file(relativePath: {eq: "denes-portrait.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const WhoWeArePage = ({data}) => (
  <Layout>
    <SEO title="Who We Are" />
    <ParallaxImage height={300} />
    <PageHeader text="Who We Are" />
    <HeaderBottomBorder />
    <PageSection
      left={
        <>
          <h2 className="text-4xl mb-2">Who We Are</h2>
          <p>
            The Bardos Foundation is named in honor of Denes and Agota Bardos, two Hungarian
            refugees who escaped Soviet persecution to make a life together in America. The Bardos
            Foundation upholds the values they reflected to everyone they touched by providing aid
            to refugees and immigrants searching for a better life.
          </p>
          <p className="mt-2">
            Denes and Agota's descendants follow in their footsteps by managing the grant programs
            of the Bardos Foundation today.
          </p>
        </>
      }
      right={
        <>
          <div className="flex justify-center">
            <Img className="w-full rounded-lg" fluid={data.bardosFamily.childImageSharp.fluid} />
          </div>
        </>
      }
    />
    <div
      id="the-bardos-story"
      className="container mx-auto px-8 sm:px-2 sm:py-24 py-12 flex flex-col items-center"
    >
      <h2 className="text-4xl mb-8">The Bardos Story</h2>
      <div>
        <Img
          className="w-64 rounded-lg sm:float-right my-8 mx-auto sm:mx-8"
          fluid={data.denesAgota1957.childImageSharp.fluid}
        />
        <p className="mb-2">
          Denes Bardos and Agota (Agi) Szabo were born in Budapest, Hungary in the late 1930s. Agi
          and Denes met in French class in a high school for music students. Agi played piano and
          Denes the double bass. Denes tells the story that he sauntered into the classroom with
          just a pencil tucked behind his ear, when he noticed a poised and tidy, brown-haired girl
          sitting at a desk. Her books were neatly covered in paper and she had all her class
          materials organized, and from that moment, he was hooked. When he asked her if he could
          walk her home, she told him that he would have to ask her father for permission, so
          eventually he did, was granted permission to walk Agi home, and thus began their story.
        </p>
        <p className="mb-2">
          At any other point in history, it might’ve been just a sweet love story about a couple of
          teenagers, but Hungary in the mid 1950's was under communist rule, and tensions of the
          oppressed country would soon reach a breaking point. In late autumn of 1956, students
          gathered near the radio building in an attempt to broadcast their demands for freedom,
          Denes and Agi among them.
        </p>
      </div>

      <p className="mb-2">
        Agi was familiar with the inside of the radio building. A gifted musician, she had played
        piano on the radio regularly, so when she noticed a particular second floor window open just
        a crack, she knew that the communist secret police were about to open fire on the unarmed
        students below. She pulled Denes away just in time to save his life, as the bullets ripped
        through where they had just been standing. The revolution had begun, and they were in the
        middle of it.
      </p>
      <p className="mb-2">
        Quick decisions had to be made over the next few days. Denes and Agi knew that they had to
        leave and try to make it to a free country. The secret police were going to be looking for
        them, so they couldn't even say goodbye to their parents or siblings to keep them safe. It
        was time to escape; they left with the clothes on their backs and utter determination in
        their souls.
      </p>
      <p className="mb-2">
        It would be a treacherous 200 km journey through a tumultuous Hungary throw into revolution
        culminating in the infamous iron curtain separately freedom from oppression, an expanse of
        barbed wire fencing, landmines, watchtowers, and armed guards with attack dogs. These
        courageous teenagers knew that if they were caught trying to escape, their chances of
        survival were very slim to none.
      </p>
      <p className="mb-2">
        They didn’t even make it to the border before they were caught and thrown in a jail just
        east of the Austrian border. End of story? Not quite. Something about fighting for your
        freedom kicked in, and Agi told off the prison guard, who was a Hungarian soldier. "How
        could you be doing this to your own countrymen?! We are Hungarians!" Agi’s words must have
        struck a chord because later that night the jail door lock “wasn't working” and the
        teenagers were able to mount a prison break, hungry, tired, and terrified, but determined.
      </p>
      <div>
        <Img
          className="w-64 rounded-lg sm:float-left my-8 mx-auto sm:mx-8"
          fluid={data.denesAgota.childImageSharp.fluid}
        />
        <p className="mb-2">
          When they came closer to the border, they could see the sweeping watchtower lights, and
          armed guards with dogs pacing on alert. What they couldn't see were the lurking landmines.
          One of the other brave young revolutionaries with them knew that he had no chance of
          survival if he was caught again, so he told the others that he would go first, and they
          should step directly in his snowprint footsteps. If he was still standing, others that
          followed would be too. They followed him, eventually made it to the barbed wire fence,
          lifting it with a stick and lying on their backs to shimmy and be pushed and pulled
          through. And then <i>running</i>. It was a miracle, but they survived. They had made it to
          a free country.
        </p>
        <p className="mb-2">
          Refugee camps were set up in Austria, where Denes and Agi married. They decided to come to
          America where they and over a thousand other Hungarian refugees pulled into the New York
          harbor aboard a Navy transport shirt on Valentine's Day, 1957. Not a dry eye was on the
          ship when they caught sight of the Statue of Liberty. <b>Liberty</b> at last.
        </p>
        <p className="mb-2">
          The “easy part” had finally come. Learn English to a college level in under three months,
          earn bachelor’s, master’s, and PhD degrees, revolutionize orthopedic implant
          methodologies, raise 10 children together, put them all through college, and thrive in a
          new, foreign land far from everything and everyone they’d ever known. Refugees fight with
          their blood, sweat, and tears to make it to America only to find an entirely new set of
          obstacles awaiting them in the promised land, but they don’t have to go through it alone.
          The American Red Cross, Catholic Charities, and just darn friendly neighbors all helped
          Denes and Agi succeed in their new life in the United States, and that’s exactly what the
          Bardos Foundation continues to do today.
        </p>
      </div>
    </div>
  </Layout>
)

export default WhoWeArePage
