# Bot Army Project

Manage your bot army with this dynamic application that allows you to enlist, release, and permanently discharge bots. Follow the guidelines below to understand the core features and get started with the project.

## Features

### 1. Bot Collection

Explore profiles of all available bots in the `BotCollection` component.

### 2. Your Bot Army

- Add a bot to your army by clicking on it. The selected bot will be enlisted in the `YourBotArmy` component. Each bot can be enlisted only **once**.

- Release a bot from your army by clicking on it. The bot will disappear from the `YourBotArmy` component.

- Permanently discharge a bot by clicking the red "x" button. This action will delete the bot from both the backend and the `YourBotArmy` component.

## Getting Started

### Prerequisites

- Node.js installed on your machine

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/bot-army-project.git
   cd bot-army-project
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

## Usage

1. **Run the Application:**
   ```bash
   npm start
   ```
   The application will be available at [http://localhost:3000](http://localhost:3000).

2. Explore the `BotCollection` to view profiles of all available bots.

3. Enlist a bot to your army by clicking on it. The bot will appear in the `YourBotArmy` component.

4. Release a bot from your army by clicking on it. The bot will be removed from the `YourBotArmy` component.

5. Permanently discharge a bot by clicking the red "x" button. This action will delete the bot from both the backend and the `YourBotArmy` component.

## Contributing

We encourage contributions! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute the code as per the terms of the license.