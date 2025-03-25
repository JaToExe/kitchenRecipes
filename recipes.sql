-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 25, 2025 at 11:31 PM
-- Wersja serwera: 10.4.32-MariaDB
-- Wersja PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kitchenrecipes`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `recipes`
--

CREATE TABLE `recipes` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `type` varchar(100) NOT NULL,
  `ingredients` text NOT NULL,
  `description` text NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `likes` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recipes`
--

INSERT INTO `recipes` (`id`, `title`, `type`, `ingredients`, `description`, `image`, `likes`) VALUES
(1, 'Spaghetti Carbonara', 'Danie główne', 'makaron spaghetti, boczek, jajka, parmezan, pieprz, sól', '1. Ugotuj makaron al dente zgodnie z instrukcją na opakowaniu.  \r\n2. Podsmaż boczek na patelni, aż będzie chrupiący.  \r\n3. W misce wymieszaj jajka z tartym parmezanem, solą i pieprzem.  \r\n4. Odcedzony makaron dodaj do boczku, zdejmij z ognia i wymieszaj z sosem jajecznym.  \r\n5. Podawaj od razu, posypując dodatkowym parmezanem.', '/assets/foodImg/1742941759216-234304087.jpg', 0),
(2, 'Sernik', 'Deser', 'twaróg, jajka, cukier, masło, mąka, wanilia, śmietana', '1. Zmiel twaróg i wymieszaj z cukrem, żółtkami i wanilią.  \r\n2. Dodaj roztopione masło i mąkę, delikatnie wymieszaj.  \r\n3. Ubij białka na sztywną pianę i połącz z masą serową.  \r\n4. Wlej masę do formy i piecz w 170°C przez około 50 minut.  \r\n5. Po wystudzeniu posmaruj śmietaną lub posyp cukrem pudrem.', '/assets/foodImg/1742941794416-780597749.jpg', 0);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `recipes`
--
ALTER TABLE `recipes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `recipes`
--
ALTER TABLE `recipes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
