'use client';

import { Card, Col, Badge } from 'react-bootstrap';
import { ProfileCardData } from '@/lib/ProfileCardData';
import TooltipImage from './TooltipImage';

const ProfileCard = ({ profile }: { profile: ProfileCardData }) => (
  <Col>
    <Card className="h-100">
      <Card.Header>
        <TooltipImage
          src={profile.picture || ''}
          name={profile.email}
          width={50}
          roundedCircle
          className=""  // Added empty className here
        />
        <Card.Title>
          {profile.firstName} {profile.lastName}
        </Card.Title>
        <Card.Subtitle>
          <span className="date">{profile.title}</span>
        </Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Card.Text>{profile.bio}</Card.Text>
        <Card.Text>
          {profile.interests.map((interest) => (
            <Badge key={interest} bg="info" className="mx-1">
              {interest}
            </Badge>
          ))}
        </Card.Text>
        <h5>Projects</h5>
        {profile.projects.map((project) => (
          <TooltipImage
            key={project.name}
            src={project.picture || ''}
            width={50}
            name={project.name}
            roundedCircle
            className="mx-1"
          />
        ))}
      </Card.Body>
    </Card>
  </Col>
);

export default ProfileCard;
