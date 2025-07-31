/* eslint-disable import/extensions */
import { Container } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';
import { PageIDs } from '@/utilities/ids';
import pageStyle from '@/utilities/pageStyle';
import ProfileCardHelper from '../profiles/ProfileCardHelper';

const LuckyPage = async () => {
  const profiles = await prisma.profile.findMany();

  if (profiles.length === 0) {
    return <Container>No profiles found.</Container>;
  }

  const randomProfile = profiles[Math.floor(Math.random() * profiles.length)];

  return (
    <Container id={PageIDs.profilesPage} style={pageStyle}>
      {/* Render one random profile with full data via ProfileCardHelper */}
      <ProfileCardHelper key={randomProfile.id} profile={randomProfile} />
    </Container>
  );
};

export default LuckyPage;

