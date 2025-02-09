export enum ChapterPermission {
  ChapterEdit = 'chapter-edit',
  EventCreate = 'event-create',
  EventEdit = 'event-edit',
  EventDelete = 'event-delete',
  EventSubscriptionsManage = 'event-subscriptions-manage',
  Rsvp = 'rsvp',
  RsvpDelete = 'rsvp-delete',
  RsvpConfirm = 'rsvp-confirm',
  VenueCreate = 'venue-create',
  VenueEdit = 'venue-edit',
  VenueDelete = 'venue-delete',
}

export enum InstancePermission {
  ChapterCreate = 'chapter-create',
  ChapterJoin = 'chapter-join',
  ChapterSubscriptionsManage = 'chapter-subscriptions-manage',
  ChapterUserRoleChange = 'chapter-user-role-change',
  SponsorsManage = 'sponsors-manage',
  UserInstanceRoleChange = 'user-instance-role-change',
  UsersView = 'users-view',
}

// Ideally this would be a new enum, but TS does not (to my knowledge) support
// that yet.
export const Permission = { ...InstancePermission, ...ChapterPermission };
