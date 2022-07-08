export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AuthInput = {
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  lastName?: InputMaybe<Scalars['String']>;
};

export type Author = {
  __typename?: 'Author';
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  lastName?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Post>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAuthor: Author;
};


export type MutationAddAuthorArgs = {
  payload: AuthInput;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['Int'];
  title: Scalars['String'];
  votes?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  author: Author;
};


export type QueryAuthorArgs = {
  id: Scalars['Int'];
};

export type Subscription = {
  __typename?: 'Subscription';
  authorAdded: Author;
};

export type FindAuthorQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FindAuthorQuery = { __typename?: 'Query', author: { __typename?: 'Author', id: number, lastName?: string | null, firstName?: string | null } };

export type AddAuthorMutationVariables = Exact<{
  payload: AuthInput;
}>;


export type AddAuthorMutation = { __typename?: 'Mutation', addAuthor: { __typename?: 'Author', id: number, firstName?: string | null, lastName?: string | null } };

export type AuthorAddedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type AuthorAddedSubscription = { __typename?: 'Subscription', authorAdded: { __typename?: 'Author', id: number } };
