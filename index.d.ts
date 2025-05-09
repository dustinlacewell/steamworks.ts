/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export interface WorkshopItemDetails {
  itemId: number
  title: string
  description: string
  ownerId: number
  timeCreated: number
  timeUpdated: number
  timeAddedToUserList: number
  visibility: number
  banned: boolean
  acceptedForUse: boolean
  tagsTruncated: boolean
  tags: Array<string>
  fileSize: number
  url: string
  numUpvotes: number
  numDownvotes: number
  score: number
  numChildren: number
}
export declare function itemStateToString(state: WorkshopItemStateEnum): string
export const enum WorkshopItemVisibility {
  Public = 0,
  FriendsOnly = 1,
  Private = 2,
  Unlisted = 3
}
export const enum WorkshopFileType {
  Community = 0,
  Microtransaction = 1,
  Collection = 2,
  Art = 3,
  Video = 4,
  Screenshot = 5,
  Game = 6,
  Software = 7,
  Concept = 8,
  WebGuide = 9,
  IntegratedGuide = 10,
  Merch = 11,
  ControllerBinding = 12,
  SteamworksAccessInvite = 13,
  SteamVideo = 14,
  GameManagedItem = 15
}
export const enum WorkshopQueryType {
  RankedByVote = 0,
  RankedByPublicationDate = 1,
  AcceptedForGameRankedByAcceptanceDate = 2,
  RankedByTrend = 3,
  FavoritedByFriendsRankedByPublicationDate = 4,
  CreatedByFriendsRankedByPublicationDate = 5,
  RankedByNumTimesReported = 6,
  CreatedByFollowedUsersRankedByPublicationDate = 7,
  NotYetRated = 8,
  RankedByTotalVotesAsc = 9,
  RankedByVotesUp = 10,
  RankedByTextSearch = 11,
  RankedByTotalUniqueSubscriptions = 12,
  RankedByPlaytimeTrend = 13,
  RankedByTotalPlaytime = 14,
  RankedByAveragePlaytimeTrend = 15,
  RankedByLifetimeAveragePlaytime = 16,
  RankedByPlaytimeSessionsTrend = 17,
  RankedByLifetimePlaytimeSessions = 18
}
export const enum WorkshopUGCType {
  Items = 0,
  ItemsMtx = 1,
  ItemsReadyToUse = 2,
  Collections = 3,
  Artwork = 4,
  Videos = 5,
  Screenshots = 6,
  AllGuides = 7,
  WebGuides = 8,
  IntegratedGuides = 9,
  UsableInGame = 10,
  ControllerBindings = 11,
  GameManagedItems = 12,
  All = 13
}
export const enum WorkshopUserListType {
  Published = 0,
  VotedOn = 1,
  VotedUp = 2,
  VotedDown = 3,
  WillVoteLater = 4,
  Favorited = 5,
  Subscribed = 6,
  UsedOrPlayed = 7,
  Followed = 8
}
export const enum WorkshopUserListOrder {
  CreationOrderDesc = 0,
  CreationOrderAsc = 1,
  TitleAsc = 2,
  LastUpdatedDesc = 3,
  SubscriptionDateDesc = 4,
  VoteScoreDesc = 5,
  ForModeration = 6
}
export const enum WorkshopItemStateEnum {
  None = 0,
  Subscribed = 1,
  LegacyItem = 2,
  Installed = 4,
  NeedsUpdate = 8,
  Downloading = 16,
  DownloadPending = 32
}
export interface WorkshopItemUpdateDetails {
  title?: string
  description?: string
  changelog?: string
  previewPath?: string
  contentPath?: string
  tags?: Array<string>
  visibility?: number
}
export interface WorkshopItemCreationResult {
  itemId: number
  needsToAcceptAgreement: boolean
}
export interface WorkshopItemInstallInfo {
  folder: string
  sizeOnDisk: number
  timestamp: number
}
export interface DownloadInfo {
  current: number
  total: number
}
export interface FriendInfo {
  steamId: number
  name: string
  state: number
  relationship: number
  gamePlayed?: string
}
export const enum FriendRelationshipEnum {
  None = 'None',
  Blocked = 'Blocked',
  RequestRecipient = 'RequestRecipient',
  Friend = 'Friend',
  RequestInitiator = 'RequestInitiator',
  Ignored = 'Ignored',
  IgnoredFriend = 'IgnoredFriend'
}
export const enum PersonaStateEnum {
  Offline = 'Offline',
  Online = 'Online',
  Busy = 'Busy',
  Away = 'Away',
  Snooze = 'Snooze',
  LookingToTrade = 'LookingToTrade',
  LookingToPlay = 'LookingToPlay',
  Invisible = 'Invisible'
}
export interface RichPresenceInfo {
  key: string
  value: string
}
export interface UserInfo {
  steamId: number
  accountId: number
  name: string
  state: PersonaStateEnum
  level: number
  loggedOn: boolean
}
export type UGCClient = UgcClient
export declare class UgcClient {
  itemStateToString(state: WorkshopItemStateEnum): string
  queryUser(appId: number, account: number, listType: WorkshopUserListType, itemType: WorkshopUGCType, sortOrder: WorkshopUserListOrder, page: number): Promise<Array<WorkshopItemDetails> | null>
  getItem(itemId: number): Promise<WorkshopItemDetails | null>
  subscribeToItem(itemId: number): Promise<void>
  unsubscribeToItem(itemId: number): Promise<void>
  getSubscriptions(): Array<number>
  getInstallInfo(itemId: number): WorkshopItemInstallInfo | null
  getDownloadInfo(itemId: number): DownloadInfo | null
  downloadItem(itemId: number, highPriority: boolean): boolean
  getItemState(itemId: number): number
  getItemStates(itemId: number): Array<WorkshopItemStateEnum>
}
export declare class SteamClient {
  constructor()
  get workshop(): UgcClient
  getCurrentUser(): UserInfo
  getSubscriptions(): Array<number>
  getFriendCount(flags?: Array<FriendRelationshipEnum> | undefined | null): number
  getFriends(flags?: Array<FriendRelationshipEnum> | undefined | null): Array<FriendInfo>
  getFriendPersonaName(steamId: number): string
  getFriendPersonaState(steamId: number): PersonaStateEnum
  getFriendRelationship(steamId: number): FriendRelationshipEnum
  getFriendGamePlayed(steamId: number): string | null
  setPersonaName(name: string): void
  setPersonaState(state: PersonaStateEnum): void
  getPersonaName(): string
  getPersonaState(): PersonaStateEnum
  addFriend(steamId: number): Promise<boolean>
  removeFriend(steamId: number): boolean
  hasFriend(steamId: number, flags?: Array<FriendRelationshipEnum> | undefined | null): boolean
  requestUserInformation(steamId: number, nameOnly: boolean): boolean
  setRichPresence(key: string, value: string): boolean
  clearRichPresence(): void
  getRichPresence(key: string): string | null
  getFriendRichPresence(steamId: number, key: string): string | null
  getRichPresenceKeys(): Array<string>
  getAllRichPresence(): Array<RichPresenceInfo>
  inviteUserToGame(steamId: number, connectString: string): boolean
}
