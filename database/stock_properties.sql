-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 20, 2021 at 11:26 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bestmode`
--

-- --------------------------------------------------------

--
-- Table structure for table `stock_properties`
--

CREATE TABLE `stock_properties` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `stock_properties`
--

INSERT INTO `stock_properties` (`id`, `title`, `comment`, `created_at`, `updated_at`) VALUES
(1, 'Current Stock Price', NULL, '2021-10-15 16:13:03', '2021-10-15 17:31:01'),
(2, 'Cost Basis', NULL, '2021-10-15 16:13:17', '2021-10-15 16:13:17'),
(3, 'Industry', NULL, '2021-10-15 16:13:23', '2021-10-15 16:13:23'),
(4, 'Sector', NULL, '2021-10-15 16:13:30', '2021-10-15 16:13:30'),
(5, 'Exchange Traded On', NULL, '2021-10-15 16:13:37', '2021-10-15 16:13:37'),
(6, 'Market Cap', 'Total dollar market value of a company\'s outstanding shares of stock.\nCalculated by multiplying the total number of a company\'s outstanding', '2021-10-15 16:13:44', '2021-10-15 17:28:40'),
(7, 'Enterpise Value (Latest)', NULL, '2021-10-15 16:13:52', '2021-10-15 16:13:52'),
(8, 'Volume', NULL, '2021-10-15 16:13:58', '2021-10-15 16:13:58'),
(9, 'Daily Volume (14 days)', NULL, '2021-10-15 16:14:06', '2021-10-15 16:14:06'),
(10, 'Volume Increase/Decrease', NULL, '2021-10-15 16:14:16', '2021-10-15 16:14:16'),
(11, 'Share Float > 40-50%', NULL, '2021-10-15 16:14:23', '2021-10-15 16:14:23'),
(12, 'stock performance', NULL, '2021-10-15 16:14:33', '2021-10-15 16:14:33'),
(13, 'PE RATIO', 'PE Ratio ideally below 20 .\n- The average P/E for S&P 500 historically ranged from 13 to 15.  \n- A PE ratio of 25 means the company trades at 25 times earnings.  Based on the earnings it would take you the PE # in years to purchase the business on the current valuation .  A low PE is a fast recuping of your investment.\nThe higher the PE the more value that is already FORECAST into the', '2021-10-15 16:14:40', '2021-10-15 17:59:48'),
(14, 'PS Ratio < 2 ideal, < 1 Great', NULL, '2021-10-15 16:14:49', '2021-10-15 16:14:49'),
(15, 'income statement                                     \r\n        Are The Companies Making Money?', NULL, '2021-10-15 16:15:00', '2021-10-15 16:15:00'),
(16, 'Total Revenuet', NULL, '2021-10-15 16:15:14', '2021-10-15 16:15:14'),
(17, 'Cost of goods sold', 'The total cost of manufacturing', '2021-10-15 16:15:21', '2021-10-15 17:36:30'),
(18, 'Gross profit', 'The profit a company makes after deducting the costs associated with making and selling its products , or the costs associated with providing its services . Gross profit will appear on a company\'s income statement and can be calculated by subtracting the cost of goods A sold ( COGS ) from revenue ( sales ) .', '2021-10-15 16:15:30', '2021-10-15 17:38:03'),
(19, 'Total operating expense', NULL, '2021-10-15 16:16:08', '2021-10-15 16:16:08'),
(20, 'ROIC-return on invested capital', 'Measures a company\'s ability to create value for all its atakeholders.', '2021-10-15 16:16:19', '2021-10-15 17:41:58'),
(21, 'ROCE-return on capital employee', 'Return on capital employed\n(ROCE) is a financial ratio that measures a company\'s profitability and the efficiency with which it uses capital\nBoth the ROE and the ROCE should be above 20%', '2021-10-15 16:16:27', '2021-10-15 17:43:56'),
(22, 'ROTCE-return on Tangible CApital', 'ROTCE measures the rate of return on the tangible common equity.\n\nROTE is computed by dividing net earnings applicable to common shareholders by average monthly', '2021-10-15 16:16:38', '2021-10-15 17:45:29'),
(23, 'Five R indicator', 'Five R Return = Sum of ROE + ROA + ROIC + ROAC + ROTE', '2021-10-15 16:16:49', '2021-10-15 17:47:52'),
(24, 'Dividends per share(YR)', 'Dividends per share is calculated by dividing the total number of dividends paid out by a company ( including interim dividends ) over a period of time , by the number of shares outstanding', '2021-10-15 16:16:57', '2021-10-15 17:49:34'),
(25, 'Dividend Yield 4%', 'How much a company pays out in dividends relative to the stock price . I like 4 % or higher Dividends often show stability . Ideally modest regular and increasing dividends are a good sign . Crazy high dividends look great on paper but companies need to re - invest in themselves for continued growth', '2021-10-15 16:17:05', '2021-10-15 17:50:39'),
(26, 'Payout ratio', 'How much money a company is returning to shareholders versus how much it is keeping hand to reinvest in growth , pay off debt , or add cash reserves ( retained earnings ) . A high percentage is good BUT too high , for example > 100 % , can be bad because a company needs to reinvest back into the company and not just cash reserves ( retained earnings ) . A high percentage is good BUT too high , for example > 100 % , can be bad because a company needs reinvest back into the company and not just pay shareholders .', '2021-10-15 16:17:16', '2021-10-15 17:52:29'),
(27, 'capital ratio', NULL, '2021-10-15 16:17:27', '2021-10-15 16:17:27'),
(28, 'Debt to equity', 'The debt-to-equity (D/E) ratio compares a company\'s total liabilities to its shareholder equity and can be used to evaluate how much leverage a company is using. Higher leverage ratios tend to indicate a company or stock with higher risk to shareholders. The result is the $$ of debt for every dollar of equity. Compare the ratio to other similar companies. ', '2021-10-15 16:17:40', '2021-10-15 17:54:18'),
(29, 'Debt to assets', 'Debt ratio measures the amount of leverage used by a company in terms of total debt to total assets.\nA debt ratio > 1.0 (100%) tells you that a company has more debt than assets.\nA debt ratio <  1.0  indicates that a company has more assets than debt.', '2021-10-15 16:17:47', '2021-10-15 17:54:42'),
(30, 'Assets to equity', 'Jerry Romine:\nAssets to Shareholder Equity is a measurement of financial leverage. It shows the ratio between the total assets of the company to the amount on which equity holders have a claim.\n\nA ratio above 2 means that the company funds more assets by issuing debt than by equity, which could be a more risky investment. A low ratio could be seen as more conservative.', '2021-10-15 16:17:54', '2021-10-15 17:55:56'),
(31, 'per share data                                         \r\n        Allow us to compare important per share data between companies', NULL, '2021-10-15 16:18:01', '2021-10-15 16:18:01'),
(32, 'Revenue per share', 'Revenue per Share is the amount of Revenue per outstanding share of the company\'s stock.', '2021-10-15 16:18:09', '2021-10-15 17:56:40'),
(33, 'EBITDA per share', 'EBITDA = earnings before interest, taxes, depreciation, and amortization', '2021-10-15 16:18:17', '2021-10-15 17:57:20'),
(34, 'Revenue per share ratio', NULL, '2021-10-15 16:18:25', '2021-10-15 16:18:25'),
(35, 'EDITDA Per Share Ratio', 'EBITDA is essentially net income (or earnings) with interest, taxes, depreciation, and amortization added back. EBITDA can be used to analyze and compare profitability among companies and industries, as it eliminates the effects of financing and capital expenditures.', '2021-10-15 16:18:32', '2021-10-15 17:57:44'),
(36, 'Operating income per share', NULL, '2021-10-15 16:18:42', '2021-10-15 16:18:42'),
(37, 'Operating income per share ratio', NULL, '2021-10-15 16:18:52', '2021-10-15 16:18:52'),
(38, 'Pretax income per share', NULL, '2021-10-15 16:19:05', '2021-10-15 16:19:05'),
(39, 'Pretax income per share ratio', NULL, '2021-10-15 16:19:15', '2021-10-15 16:19:15'),
(40, 'Free cash flow per share', NULL, '2021-10-15 16:19:24', '2021-10-15 16:19:24'),
(41, 'Shares outstanding', NULL, '2021-10-15 16:19:31', '2021-10-15 16:19:31'),
(42, 'Avaliable float shares', NULL, '2021-10-15 16:19:39', '2021-10-15 16:19:39'),
(43, 'Beta Ratio 5 YR (Risk Volatility)', 'A beta that is greater than 1.0 indicates that the security\'s price is theoretically more volatile than the market. For example, if a stock\'s beta is 1.2, it is assumed to be 20% more volatile than the market. Technology stocks and small caps tend to have higher betas than the market benchmark. A negative beta correlation means an investment moves in the opposite direction from the stock market. When the market rises, a negative-beta investment generally falls.', '2021-10-15 16:19:48', '2021-10-15 17:58:50'),
(44, 'Total Assets Growth', NULL, '2021-10-15 16:19:56', '2021-10-15 16:19:56'),
(45, 'Total Equity Growth', NULL, '2021-10-15 16:20:07', '2021-10-15 16:20:07'),
(46, 'Cash From Operations Growth', NULL, '2021-10-15 16:20:14', '2021-10-15 16:20:14'),
(47, 'CAGR-COMPOUNDED ANNUAL', NULL, '2021-10-15 16:20:23', '2021-10-15 16:20:23'),
(48, 'Revenue 10-Period CAGR', NULL, '2021-10-15 16:20:30', '2021-10-15 16:20:30'),
(49, 'Diluted EPS 10-Period CAGR\r\n', NULL, NULL, NULL),
(50, 'Total Assets 10-Period CAGR', NULL, '2021-10-15 16:20:56', '2021-10-15 16:20:56'),
(51, 'Total Equity 10-Period CAGR', NULL, '2021-10-15 16:21:05', '2021-10-15 16:21:05'),
(52, 'Free CAsh Flow 10-Period CAGR', NULL, '2021-10-15 16:21:18', '2021-10-15 16:21:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `stock_properties`
--
ALTER TABLE `stock_properties`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `stock_properties`
--
ALTER TABLE `stock_properties`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=301;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
