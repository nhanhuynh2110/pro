import * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const FindAuthorDocument = gql`
    query findAuthor($id: Int!) {
  author(id: $id) {
    id
    lastName
    firstName
  }
}
    `;

/**
 * __useFindAuthorQuery__
 *
 * To run a query within a React component, call `useFindAuthorQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAuthorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAuthorQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindAuthorQuery(baseOptions: Apollo.QueryHookOptions<Types.FindAuthorQuery, Types.FindAuthorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.FindAuthorQuery, Types.FindAuthorQueryVariables>(FindAuthorDocument, options);
      }
export function useFindAuthorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.FindAuthorQuery, Types.FindAuthorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.FindAuthorQuery, Types.FindAuthorQueryVariables>(FindAuthorDocument, options);
        }
export type FindAuthorQueryHookResult = ReturnType<typeof useFindAuthorQuery>;
export type FindAuthorLazyQueryHookResult = ReturnType<typeof useFindAuthorLazyQuery>;
export type FindAuthorQueryResult = Apollo.QueryResult<Types.FindAuthorQuery, Types.FindAuthorQueryVariables>;
export const AddAuthorDocument = gql`
    mutation addAuthor($payload: AuthInput!) {
  addAuthor(payload: $payload) {
    id
    firstName
    lastName
  }
}
    `;
export type AddAuthorMutationFn = Apollo.MutationFunction<Types.AddAuthorMutation, Types.AddAuthorMutationVariables>;

/**
 * __useAddAuthorMutation__
 *
 * To run a mutation, you first call `useAddAuthorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddAuthorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addAuthorMutation, { data, loading, error }] = useAddAuthorMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useAddAuthorMutation(baseOptions?: Apollo.MutationHookOptions<Types.AddAuthorMutation, Types.AddAuthorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.AddAuthorMutation, Types.AddAuthorMutationVariables>(AddAuthorDocument, options);
      }
export type AddAuthorMutationHookResult = ReturnType<typeof useAddAuthorMutation>;
export type AddAuthorMutationResult = Apollo.MutationResult<Types.AddAuthorMutation>;
export type AddAuthorMutationOptions = Apollo.BaseMutationOptions<Types.AddAuthorMutation, Types.AddAuthorMutationVariables>;
export const AuthorAddedDocument = gql`
    subscription authorAdded {
  authorAdded {
    id
  }
}
    `;

/**
 * __useAuthorAddedSubscription__
 *
 * To run a query within a React component, call `useAuthorAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useAuthorAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthorAddedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useAuthorAddedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<Types.AuthorAddedSubscription, Types.AuthorAddedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<Types.AuthorAddedSubscription, Types.AuthorAddedSubscriptionVariables>(AuthorAddedDocument, options);
      }
export type AuthorAddedSubscriptionHookResult = ReturnType<typeof useAuthorAddedSubscription>;
export type AuthorAddedSubscriptionResult = Apollo.SubscriptionResult<Types.AuthorAddedSubscription>;