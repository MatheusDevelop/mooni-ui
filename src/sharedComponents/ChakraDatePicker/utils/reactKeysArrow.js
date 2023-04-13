
export class ArrowKeysReact {
  config;

  constructor(config) {
    this.config = config;
  }

  getEvents() {
    return {
      onKeyDown: (e) => {
        switch (e.key) {
          case 'ArrowDown':
            this.config.down && this.config.down();
            break;
          case 'ArrowLeft':
            this.config.left && this.config.left();
            break;
          case 'ArrowRight':
            this.config.right && this.config.right();
            break;
          case 'ArrowUp':
            this.config.up && this.config.up();
            break;
        }
      },
    };
  }
}