# TidalDex Info

![TidalDex Logo](https://tidaldex.com/images/tokens/0xe9e7cea3dedca5984780bafc599bd69add087d56.png)

## Overview

TidalDex Info is a comprehensive analytics dashboard for [TidalDex](https://tidaldex.com), providing detailed insights into the decentralized exchange's trading activity, liquidity pools, and token performance. This platform offers real-time data visualization and historical analytics to help traders, liquidity providers, and developers make informed decisions.

## Features

- **Global Analytics Dashboard**: Track overall exchange volume, liquidity, and trading activity
- **Token Analytics**: Detailed information on token prices, volume, liquidity, and historical performance
- **Trading Pair Analysis**: Comprehensive data on trading pairs, including liquidity, volume, and fees
- **Transaction Monitoring**: Real-time tracking of transactions across the exchange
- **Account Information**: User-specific analytics for holdings and trading activity
- **Data Visualization**: Interactive charts showing historical trends and performance metrics
- **Search Functionality**: Find specific tokens, pairs, or accounts quickly

## Technology Stack

- **Frontend**: React.js with styled-components
- **Data Fetching**: Apollo Client for GraphQL
- **Data Source**: TheGraph for indexing blockchain data
- **Charts**: Lightweight-charts and Recharts for data visualization
- **Routing**: React Router for navigation
- **State Management**: React Context API

## Getting Started

### Prerequisites

- Node.js (v12.x or higher recommended)
- Yarn package manager
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/chinese-zodiac/tidaldex-info.git
   cd tidaldex-info
   ```

2. Install dependencies:

   ```bash
   yarn
   ```

### Running Locally

Start the development server:

```bash
yarn start
```

The application will be available at `http://localhost:3000`.

### Building for Production

Create a production build:

```bash
yarn build
```

The build artifacts will be stored in the `build/` directory.

## Deployment

The production version of TidalDex Info is deployed at [https://info.tidaldex.com](https://info.tidaldex.com).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the GPL-3.0 License - see the LICENSE file for details.

## Acknowledgments

- Built upon Uniswap's original analytics interface
- Powered by TheGraph Protocol for data indexing
- TidalDex team for developing the core exchange platform

---

\_Made with ❤️ by Ceramic Fingers
