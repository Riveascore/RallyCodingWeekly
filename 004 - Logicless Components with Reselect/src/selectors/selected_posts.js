// Takes a list of posts and postIds, and picks out seldcted posts

// Takes in pieces of state, and pushes out new state
import _ from 'lodash';
import { createSelector } from 'reselect';

// Create select functions to pick off pieces of state we care about
//
//
// Called with GLOBAL application state
const postsSelector = state => state.posts
const selectedPostsSelector = state => state.selectedPostIds

const getPosts = (posts, selectedPostIds) => {
  // Filter over list of posts
  const selectedPosts = _.filter(
    posts,
    post => _.contains(selectedPostIds, post.id)
  );

  return selectedPosts;
}

// Pass in a bunch of "state selecting functions"
// Whenever global state is updated, postsSelector
// and selectedPostsSelector will be called
// Their return values will be shoved into getPosts
export default createSelector(
  postsSelector, // Pick off piece fo state
  selectedPostsSelector, // Pick off piece fo state
  getPosts // Last arg is function that has select logic
)
