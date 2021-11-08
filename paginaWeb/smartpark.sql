-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 08, 2021 at 03:18 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `smartpark`
--

-- --------------------------------------------------------

--
-- Table structure for table `data`
--

CREATE TABLE `data` (
  `id` int(11) NOT NULL,
  `id_Calle` varchar(20) DEFAULT NULL,
  `slot` int(11) DEFAULT NULL,
  `estado` int(11) DEFAULT 0,
  `fechaHora` varchar(25) DEFAULT '',
  `fk_data` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `data`
--

INSERT INTO `data` (`id`, `id_Calle`, `slot`, `estado`, `fechaHora`, `fk_data`) VALUES
(1, 'Calle5', 1, 0, '2021-10-13T17:02:32:05:00', 1),
(2, 'Calle5', 2, 1, '2021-10-13T17:02:32:05:00', 1),
(4, 'Calle5', 3, 0, '2021-10-13T17:02:32:05:00', 1),
(5, 'Calle5', 4, 1, '2021-10-13T17:02:32:05:00', 1),
(26, 'Calle4A', 3, 1, '2021-11-04T17:56:30-05:00', 1),
(27, 'Calle4A', 1, 1, '2021-11-04T17:56:30-05:00', 1),
(28, 'Calle4A', 2, 0, '2021-11-04T17:56:30-05:00', 1),
(29, 'Calle4A', 1, 1, '2021-11-04T17:57:29-05:00', 1),
(30, 'Calle4A', 2, 0, '2021-11-04T17:57:29-05:00', 1),
(31, 'Calle4A', 3, 1, '2021-11-04T17:57:29-05:00', 1);

-- --------------------------------------------------------

--
-- Table structure for table `dayresult`
--

CREATE TABLE `dayresult` (
  `id` int(11) NOT NULL,
  `fkPark` int(11) DEFAULT NULL,
  `fecha` varchar(45) DEFAULT NULL,
  `PorcentajeOcu` double DEFAULT NULL,
  `zona` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `valores` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dayresult`
--

INSERT INTO `dayresult` (`id`, `fkPark`, `fecha`, `PorcentajeOcu`, `zona`, `valores`) VALUES
(1, 1, '2021/11/02', 56, 'Calle4', '1,2,53,72'),
(7, 3, '2021/11/04', 12.2, 'Calle1', '8, 2,2,5,2'),
(8, 1, '2021/11/04', 57.2, 'Calle2', '8, 56,5,6'),
(9, 1, '2021/11/04', 57.2, 'Calle2', '8, 56,5,6'),
(10, 3, '2021/11/04', 88.2, 'Calle2A', '81,2,3,4');

-- --------------------------------------------------------

--
-- Table structure for table `parqueadero`
--

CREATE TABLE `parqueadero` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) DEFAULT NULL,
  `ubicacion` varchar(45) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `tipo` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `parqueadero`
--

INSERT INTO `parqueadero` (`id`, `nombre`, `ubicacion`, `cantidad`, `tipo`) VALUES
(1, 'Parque del Perro', '3.435838, -76.545550', 5, 'publico'),
(2, 'Tequendama', '3.420175, -76.545713', 5, 'publico'),
(3, 'Santa Elena', '3.427403, -76.523300', 4, 'publico');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `data`
--
ALTER TABLE `data`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_data_idx` (`fk_data`);

--
-- Indexes for table `dayresult`
--
ALTER TABLE `dayresult`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkPark_idx` (`fkPark`);

--
-- Indexes for table `parqueadero`
--
ALTER TABLE `parqueadero`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `data`
--
ALTER TABLE `data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `dayresult`
--
ALTER TABLE `dayresult`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `parqueadero`
--
ALTER TABLE `parqueadero`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `data`
--
ALTER TABLE `data`
  ADD CONSTRAINT `fk_data` FOREIGN KEY (`fk_data`) REFERENCES `parqueadero` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `dayresult`
--
ALTER TABLE `dayresult`
  ADD CONSTRAINT `fkPark` FOREIGN KEY (`fkPark`) REFERENCES `parqueadero` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
