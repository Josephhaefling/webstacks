import * as React from "react";
import Text from '../components/text/text.component';
import Heading from '../components/heading/heading.component';
import Button from '../components/button/button.component';
import Navigation from '../components/navigation/navigation.component';
import NavBar from "../components/navbar/navbar.component";
import Features from "../components/features/features.component";
import Section from "../components/section/section.component";
import Card from "../components/card/card.component";
import { Colors } from '../../helpers/ui';

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

const IndexPage = () => {
  return (
    <main>
      {/* <Heading color={Colors.black} level={1}>Some Title</Heading>
      <Text bold color={Colors.black}>Augmented Reality</Text> */}
      {/* <Button color={Colors.black} label='Learn More'/> */}
      <NavBar />
      <Section>
        <Card.Body>
          <Card>
            <Card.Header>
              <Heading color={Colors.black} level={5}>
                AMERICA’S #1 RATED ADVENTURE PLATFORM
              </Heading>
              <Heading color={Colors.black} level={2}>
                Take control of your weekends
              </Heading>
              <Text color={Colors.black}>
                Find adveture anywhere.
              </Text>
            </Card.Header>
            <Card.Footer>
              <Button color={Colors.blue} image="chevronRight" label="Get started" />
              <Button color={Colors.gray} image="chevronRight" label="Request a demo" />
            </Card.Footer>
          </Card>
        </Card.Body>
      </Section>
      <Section>
        <Features />
      </Section>
    </main>
  )
}

export default IndexPage;
