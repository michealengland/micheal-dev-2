---
title: React Native Overview Notes
description: A collection of notes taken while learning React Native basics.
pubDate: Feb 22 2025
heroImage: "./assets/react-native-notes-cover-960x480.webp"
heroAlt: Photo by Tron Lea on Unsplash
---

Finding myself unexpectedly looking for a new role I wanted to focus on skills that would help me in a new position. Over the upcoming weeks I'm branching out and building mini-projects on stacks that I've always wanted to try. I decided to start with React Native as it's got a semi-familiar feel for me since I used to work heavily in React.

**This article is a collection of my initial notes working through the [React Native "Getting Started" docs](https://reactnative.dev/docs/getting-started).**

## Main Characteristics

While reading through the documentation, here what I believe to be some of the best reasons to use React Native.

- File based routing
- Very similar to React, component based architecture. Uses JS to access your platforms native APIs
- Works on IOS, Android, Web
- Has native utilities so that you can use libraries
- Ability to write components based on use-case
- Can work alongside traditional React application by sharing a component ecosystem (sounds cool but also sounds complex to manage at scale)
- Builtin web socket support
- Device version detection
- Can use with device specific IDEs such as Xcode
## Views

Views are similar to layouts or modules. They define how a collection of UI elements is displayed.

## Native Components

React Native can invoke view with JavaScript that correspond to native components. **At run time, the components are created as the corresponding Android & IOS runtimes.** This makes them feel, look, and behave like native apps.

React Native can invoke views with JavaScript that correspond to native components. **At runtime, these components are created as the corresponding Android & iOS runtime components.** This makes them feel, look, and behave like native apps.

## Core Components

There are many core components in React Native. The table below is a copy from the documentation of the most commonly used Core Components.

View the original [reference](https://reactnative.dev/docs/intro-react-native-components#core-component).

|React Native UI Component|Android View|iOS View|Web Analog|Description|
|---|---|---|---|---|
|`<View>`|`<ViewGroup>`|`<UIView>`|A non-scrolling `<div>`|A container that supports layout with flexbox, style, some touch handling, and accessibility controls|
|`<Text>`|`<TextView>`|`<UITextView>`|`<p>`|Displays, styles, and nests strings of text and even handles touch events|
|`<Image>`|`<ImageView>`|`<UIImageView>`|`<img>`|Displays different types of images|
|`<ScrollView>`|`<ScrollView>`|`<UIScrollView>`|`<div>`|A generic scrolling container that can contain multiple components and views|
|`<TextInput>`|`<EditText>`|`<UITextField>`|`<input type="text">`|Allows the user to enter text|
## React Fundamentals

Similar to React, React Native uses the same philosophy of:

- Components
- JSX / TSX
- Props
- State
- React Hooks

> Note: In a lot of ways `<View>` is similar to a div. Just like in React, using `<>` and `</>` as wrappers allow you to avoid adding an unwanted wrapper tags.

Here’s a simple view with text input and text, demonstrating props usage in a way similar to React:

```tsx
import React from 'react';
import {Text, View} from 'react-native';

type CatProps = {
  name: string;
};

const Cat = (props: CatProps) => {
  return (
    <View>
      <Text>Hello, I am {props.name}!</Text>
    </View>
  );
};

const Cafe = () => {
  return (
    <View>
      <Cat name="Maru" />
      <Cat name="Jellylorum" />
      <Cat name="Spot" />
    </View>
  );
};

export default Cafe;
```
## State

State determines how components render and behave. It functions as a component's personal database.

Similar to React, you use `useState` along with other hooks. Also, you can use controlled (uses state) / uncontrolled (only provides initial defaults and tracks value) components.

See [Controlling an Input with State](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)

```tsx
const Cat = (props: CatProps) => {
const [isHungry, setIsHungry] = useState(true);
// ...
};
```

## ScrollView

The `ScrollView` works best for displaying a small number of items of limited size. **All elements within a `ScrollView` are rendered, even if they are not currently visible on the screen.** See [Snack Expo](https://snack.expo.dev/) for examples.

ScrollViews can also support paging through gestures.

*For example, Swiping on Android devices can be done using the "ViewPager".*

> If you have a long list of items that cannot fit on the screen, use a `FlatList` instead. See [list views documentation](https://reactnative.dev/docs/using-a-listview).

## ListViews

ListViews are a way of listing content within a ReactNative view.

- **FlatList** – Displays a scrolling list of dynamic data, only rendering elements currently visible on the screen.
- **SectionList** – Similar to `FlatList`, but supports section-based lists.

## Networking

React Native uses the Fetch API (similar to the browser). Alternatively, you can use the [XMLHttpRequest API](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) or third-party libraries like Axios.

> **Note:** Some devices (e.g., iOS) enforce security policies requiring HTTPS and may throw errors. You can use an [ATS exception](https://reactnative.dev/docs/integration-with-existing-apps#test-your-integration) to override this.

### Fetch Example

```tsx
const getMoviesFromApiAsync = async () => {
	try {
		const response = await fetch(
		'https://reactnative.dev/movies.json',
		);
		const json = await response.json();
		return json.movies;
	} catch (error) {
		console.error(error);
	}
};
```

### XMLHttpRequest Example

```tsx
const request = new XMLHttpRequest();
request.onreadystatechange = e => {
	if (request.readyState !== 4) {
		return;
	}

	if (request.status === 200) {
		console.log('success', request.responseText);
	} else {
		console.warn('error');
	}
};

request.open('GET', 'https://mywebsite.com/endpoint/');
request.send();
```
## WebSocket Support

React Native supports web sockets.  See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) for more ideas on this.

## Platform Specific Code

When building across platforms, you'll likely need to write something unique to the platform.

> React Native provides a module that detects the platform in which the app is running. You can use the detection logic to implement platform-specific code. Use this option when only small parts of a component are platform-specific.

```tsx
import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	height: Platform.OS === 'ios' ? 200 : 100,
});
```

## PlatformSelect

In some cases, custom renders will need to be used based on the device.

> If your app has a larger amount of platform specific code, it should be split up accordingly. Ex:

```js
BigButton.ios.js
BigButton.android.js

// React Native will automatically pick up the right file based on the running platform.
import BigButton from './BigButton';
```

### Example of using Platform.select.

```tsx
import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
      },
      android: {
        backgroundColor: 'green',
      },
      default: {
        // other platforms, web for example
        backgroundColor: 'blue',
      },
    }),
  },
});
```

This can be taken a step further such as

```tsx
const Component = Platform.select({
  ios: () => require('ComponentIOS'),
  android: () => require('ComponentAndroid'),
})();
```
## Shared Compatibility

When projects share common code in React Native & React JS you can use the `.native.js` extension.

```
Container.js # picked up by webpack, Rollup or any other Web bundler
Container.native.js # picked up by the React Native bundler for both Android and iOS (Metro)
```

On projects with shared code, the bundler for should be configured to ignore `.native.js`. This way, we can avoid having unwanted code in production.

## Version Detection

When checking versions on devices, each platform may require different checks on how to get the actual version number.

- Version detection on [Android](https://reactnative.dev/docs/platform-specific-code#detecting-the-android-version-android)
- Version detection on  [iOS](https://reactnative.dev/docs/platform-specific-code#detecting-the-ios-version-ios)

## Environment

Similar to React, React Native has it's own recommendations of using a "Framework" such as [Expo](https://docs.expo.dev/get-started/set-up-your-environment/?platform=ios&device=physical). This is recommended to avoid spending a lot of time configuring an environment instead of just getting one up and running.

React Native can be [manually]( https://reactnative.dev/docs/getting-started-without-a-framework) configured similar to React. This is useful for custom configurations.

*Note: I had a difficult time locating more frameworks on this topic. It seems as though Expo is the primary recommendation at this time.*

## Environment Setup

Unlike React that just works in the browser, you'll need to configure Android / Xcode to develop your application locally. These applications have built in tooling for accurately rendering the app in their native environments.

For installation details see https://reactnative.dev/docs/set-up-your-environment#installing-dependencies

## React Native on TV Devices

Apple TV and Android TV support for React Native is maintained separately in the react-native-tvos NPM package, not in the core repo. This is a fork of React Native with only the necessary changes for TV support.

See [React Native TVOS](https://github.com/react-native-tvos/react-native-tvos#readme)
