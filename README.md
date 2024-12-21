# Expo Linking.getInitialURL() Inconsistency on Android

This repository demonstrates a bug in Expo's `Linking.getInitialURL()` API where the function inconsistently returns `null` on Android devices, even when a deep link was used to launch the application.  This issue results in unpredictable application behavior as the app fails to process the intended deep link.

## Problem

The `Linking.getInitialURL()` method, designed to retrieve the initial URL used to launch the app, returns `null` despite successfully launching the app from a deep link. This behavior is inconsistent; sometimes it works as expected, while other times it fails to return the URL.

## Reproduction

The `bug.js` file contains a minimal example demonstrating this problem.  Try running the app and launching it via a deep link (e.g., `myapp://some-path`). The app should log the URL returned by `getInitialURL()`.  You will find inconsistent results across different Android devices or even different launches on the same device.  

## Solution

The `bugSolution.js` file shows one potential workaround involving using an event listener and checking for the URL after a slight delay.  This approach, however, isn't perfect and may introduce minor latency.  A more robust solution might involve exploring alternative approaches to deep linking, such as custom schemes or React Navigation's linking features.

## Further Investigation

The root cause of this inconsistency is unclear and warrants further investigation into Expo's `Linking` implementation and how it interacts with various Android versions and device configurations.  This issue could be potentially related to background processes, race conditions, or other low-level issues within the underlying Android system or Expo's handling of it.