/* eslint-disable import/extensions */
import { Profile } from '@prisma/client';
import { prisma } from '@/lib/prisma';
import { ProfileCardData } from '@/lib/ProfileCardData';
import ProfileCard from '../../components/ProfileCard';

const ProfileCardHelper = async ({ profile }: { profile: Profile }) => {
  const profileInterests = await prisma.profileInterest.findMany({
    where: { profileId: profile.id },
  });
  const interests = await prisma.interest.findMany({
    where: { id: { in: profileInterests.map(pi => pi.interestId) } },
  });
  const interestNames = interests.map(interest => interest.name);
  const profileProjects = await prisma.profileProject.findMany({
    where: { profileId: profile.id },
  });
  const projects = await prisma.project.findMany({
    where: { id: { in: profileProjects.map(pp => pp.projectId) } },
  });

  const profileData: ProfileCardData = {
    firstName: profile.firstName,
    lastName: profile.lastName,
    email: profile.email,
    bio: profile.bio,
    title: profile.title,
    picture: profile.picture,
    interests: interestNames,
    projects,
  };

  return <ProfileCard profile={profileData} />;
};

export default ProfileCardHelper;
