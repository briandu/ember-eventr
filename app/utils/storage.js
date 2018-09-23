export default {
  set(key, data) {
    const object = {
      data: data,
      timestamp: new Date().getTime()
    };
    const objectString = JSON.stringify(object);
    if (this.localStorage.isActive()) {
      this.localStorage.set(key, objectString);
    } else {
      this.cookie.set(key, objectString);
    }
  },
  get(key) {
    const objectString = this.localStorage.isActive() ? this.localStorage.get(key) : this.cookie.get(key);
    let object;
    try {
      object = JSON.parse(objectString);
    } catch (error) {
      // continue regardless of error
    }
    if (object && object.data && this.isFreshData(object.timestamp, key)) {
      return object.data;
    } else {
      this.delete(key);
    }
  },
  delete(key) {
    if (this.localStorage.isActive()) {
      this.localStorage.delete(key);
    } else {
      this.cookie.delete(key);
    }
  },
  isFreshData(timestamp, dataType) {
    if (timestamp > this.globalCacheResetTimestamp) {
      const timeLimitInDays = this.timeLimitsInDaysByType[dataType] || 1; // Default freshness to 1 day
      const currentTime = new Date().getTime();
      const timeDifferenceInSeconds = (currentTime - timestamp) / 1000;
      const timeLimitInSeconds = timeLimitInDays * 24 * 60 * 60;
      return timeDifferenceInSeconds <= timeLimitInSeconds;
    }
  },
  globalCacheResetTimestamp: new Date(2016, 9, 17, 0, 0, 0).getTime(),
  timeLimitsInDaysByType: {
    user: 30 // Users can be logged in 30 days
  },
  localStorage: {
    isActive() {
      try {
        window.localStorage.setItem('test-localStorage', 'test');
        window.localStorage.removeItem('test-localStorage');
        return true;
      } catch (error) {
        return false;
      }
    },
    set(key, value) {
      window.localStorage.setItem(key, value);
    },
    get(key) {
      return window.localStorage.getItem(key);
    },
    delete(key) {
      window.localStorage.removeItem(key);
    }
  },
  cookie: {
    set(key, value, exdays) {
      if (typeof document !== 'undefined') {
        var date = new Date();
        date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = 'expires=' + date.toUTCString();
        document.cookie = key + '=' + value + ';' + expires + ';path=/';
      }
    },
    get(key) {
      if (typeof document !== 'undefined') {
        var name = key + '=';
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) === ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) === 0) {
            const value = c.substring(name.length, c.length);
            return value !== 'undefined' ? value : null;
          }
        }
      }
    },
    delete(key) {
      this.set(key, null, -1);
    }
  }
};
