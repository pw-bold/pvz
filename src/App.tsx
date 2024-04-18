import React from 'react';
import useLinkedin from './hooks/useLinkedin';
import { Avatar, Card, CardContent, Typography, CircularProgress, List, ListItem, ListItemText } from '@mui/material';

const LinkedInProfileComponent: React.FC = () => {
  const { profile, loading, error } = useLinkedin('https://www.linkedin.com/in/julien-keraval-visum');

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">Error: {error}</Typography>;
  if (!profile) return <Typography>No profile data found.</Typography>;

  return (
    <Card>
      <CardContent>
        <Avatar src={profile.person.photoUrl} alt={`${profile.person.firstName} ${profile.person.lastName}`} sx={{ width: 100, height: 100, marginBottom: 2 }} />
        <Typography variant="h5">{profile.person.firstName} {profile.person.lastName}</Typography>
        <Typography variant="subtitle1">{profile.person.headline}</Typography>
        <Typography variant="body2" color="textSecondary">{profile.person.location}</Typography>
        <Typography variant="body2">Followers: {profile.person.followerCount}</Typography>
        <Typography variant="body2">Connections: {profile.person.connectionCount}</Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>Positions:</Typography>
        <List dense>
          {profile.person.positions.positionHistory.map((position: any, index: number) => (
            <ListItem key={index} divider>
              <ListItemText
                primary={position.title}
                secondary={`${position.companyName} - ${position.description}`}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default LinkedInProfileComponent;
