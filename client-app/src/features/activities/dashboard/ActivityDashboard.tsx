import React from 'react'
import { Grid, List } from 'semantic-ui-react';
import { Activity } from '../../../app/layout/models/activity';

interface Props {
    activities: Activity[];
}

export default function ActivityDashboard({activities}: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <List>
                {activities.map( (activity: Activity) => (
                    <List.Item key={activity.id}>
                    {activity.title}
                    </List.Item>
                ))}
                </List>

            </Grid.Column>
        </Grid>
    );
}