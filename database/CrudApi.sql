--
-- PostgreSQL database dump
--

-- Dumped from database version 11.11
-- Dumped by pg_dump version 13.2

-- Started on 2022-03-01 22:46:24

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

--
-- TOC entry 198 (class 1259 OID 49267)
-- Name: Category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Category" (
    "Id" integer NOT NULL,
    "Name" text,
    "Description" text
);


ALTER TABLE public."Category" OWNER TO postgres;

--
-- TOC entry 197 (class 1259 OID 49265)
-- Name: Category_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."Category" ALTER COLUMN "Id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public."Category_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 200 (class 1259 OID 49277)
-- Name: Product; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Product" (
    "Id" integer NOT NULL,
    "Name" text,
    "Description" text,
    "Value" double precision NOT NULL,
    "Brand" text,
    "Category_Id" integer NOT NULL
);


ALTER TABLE public."Product" OWNER TO postgres;

--
-- TOC entry 199 (class 1259 OID 49275)
-- Name: Product_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."Product" ALTER COLUMN "Id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public."Product_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 196 (class 1259 OID 49260)
-- Name: __EFMigrationsHistory; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."__EFMigrationsHistory" (
    "MigrationId" character varying(150) NOT NULL,
    "ProductVersion" character varying(32) NOT NULL
);


ALTER TABLE public."__EFMigrationsHistory" OWNER TO postgres;

--
-- TOC entry 2826 (class 0 OID 49267)
-- Dependencies: 198
-- Data for Name: Category; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Category" ("Id", "Name", "Description") FROM stdin;
0	N??o definida	Sem descri????o
3	Eletr??nicos	Eletr??nica em geral
\.


--
-- TOC entry 2828 (class 0 OID 49277)
-- Dependencies: 200
-- Data for Name: Product; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Product" ("Id", "Name", "Description", "Value", "Brand", "Category_Id") FROM stdin;
1	Abra??adeira Rosca sem fim A??o Inox 3/4	Ideal para aplica????o em superf??cies ??midas ou com a????o direta de ??gua e maresia pois tem alta resist??ncia a corros??o.	23.8999999999999986	Standers	0
6	Headset com fio USB Logitech H390 com Almofadas em Couro, Controles de ??udio Integrado e Microfone com Redu????o de Ru??do	Desfrute de chamadas de internet claras com conex??o USB-A plug-and-play simples e um microfone com redu????o de ru??dos. Os controles integrados permitem controlar o volume ou colocar chamadas em sil??ncio sem interromper chamadas. Os drivers ajustados por laser fornecem ??udio digital aprimorado com suas m??sicas e jogos favoritos.	79.9899999999999949	Logitech	3
\.


--
-- TOC entry 2824 (class 0 OID 49260)
-- Dependencies: 196
-- Data for Name: __EFMigrationsHistory; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."__EFMigrationsHistory" ("MigrationId", "ProductVersion") FROM stdin;
20220301145648_CreateDBPostGreSQL	5.0.13
\.


--
-- TOC entry 2834 (class 0 OID 0)
-- Dependencies: 197
-- Name: Category_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Category_Id_seq"', 3, true);


--
-- TOC entry 2835 (class 0 OID 0)
-- Dependencies: 199
-- Name: Product_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Product_Id_seq"', 6, true);


--
-- TOC entry 2700 (class 2606 OID 49274)
-- Name: Category PK_Category; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Category"
    ADD CONSTRAINT "PK_Category" PRIMARY KEY ("Id");


--
-- TOC entry 2702 (class 2606 OID 49284)
-- Name: Product PK_Product; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "PK_Product" PRIMARY KEY ("Id");


--
-- TOC entry 2698 (class 2606 OID 49264)
-- Name: __EFMigrationsHistory PK___EFMigrationsHistory; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."__EFMigrationsHistory"
    ADD CONSTRAINT "PK___EFMigrationsHistory" PRIMARY KEY ("MigrationId");


-- Completed on 2022-03-01 22:46:26

--
-- PostgreSQL database dump complete
--

