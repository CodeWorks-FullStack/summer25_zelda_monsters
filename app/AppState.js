import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  // NOTE array will be populated with data after our network request
  monsters = []
}

export const AppState = createObservableProxy(new ObservableAppState())