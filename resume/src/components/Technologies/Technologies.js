import React from 'react';
import { DiFirebase, DiReact, DiMootoolsBadge, DiPhotoshop } from 'react-icons/di';
import { AiOutlineTool, } from 'react-icons/ai';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <br />
    <br />
      <SectionTitle>Skills</SectionTitle>
      <SectionText>
        skills that I learned from pathways.
      </SectionText>
      <List>
        {/* List Item 1 ---------------------------- */}
        <ListItem>
          <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              React <br />
              JavaScript <br />
              CSS3 <br />
              HTML5
            </ListParagraph>
          </ListContainer>
        </ListItem>
        {/* List Item 2 ---------------------------- */}
        <ListItem>
          <DiFirebase size="3rem" />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              MongoDB <br />
              Express <br />
              Node.js
            </ListParagraph>
          </ListContainer>
        </ListItem>
        {/* List Item 3 ---------------------------- */}
        <ListItem>
          <DiPhotoshop size="3rem" />
          <ListContainer>
            <ListTitle>Designs</ListTitle>
            <ListParagraph>
              Photoshop <br />
              Figma <br />
              Blender <br />
              MAYA <br />
              3DS MAX  <br />
              ZBrush  
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
      <br />
      <br />
      <br />
  </Section>
);

export default Technologies;
