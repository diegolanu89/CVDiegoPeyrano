import React from 'react'
import {
  FaReact,
  FaAngular,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaProjectDiagram,
  FaJava,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaDatabase,
  FaMicrosoft,
  FaMicrochip,
  FaServer,
} from 'react-icons/fa'
import {
  SiTypescript,
  SiDjango,
  SiTensorflow,
  SiCypress,
  SiNestjs,
  SiFirebase,
  SiKubernetes,
  SiPostgresql,
  SiMongodb,
  SiCplusplus,
  SiC,
  SiDotnet,
  SiGo,
} from 'react-icons/si'

export const techIcons: Record<string, React.ReactNode> = {
  // Frontend
  react: React.createElement(FaReact, { color: '#61dafb' }),
  angular: React.createElement(FaAngular, { color: '#dd0031' }),
  html: React.createElement(FaHtml5, { color: '#e34f26' }),
  css: React.createElement(FaCss3Alt, { color: '#1572b6' }),
  javascript: React.createElement(FaJs, { color: '#f7df1e' }),
  typescript: React.createElement(SiTypescript, { color: '#3178c6' }),

  // Backend
  node: React.createElement(FaNodeJs, { color: '#339933' }),
  'node.js': React.createElement(FaNodeJs, { color: '#339933' }),
  nest: React.createElement(SiNestjs, { color: '#e0234e' }),
  'nest.js': React.createElement(SiNestjs, { color: '#e0234e' }),
  python: React.createElement(FaPython, { color: '#3776ab' }),
  django: React.createElement(SiDjango, { color: '#092e20' }),
  java: React.createElement(FaJava, { color: '#f89820' }),
  '.net': React.createElement(SiDotnet, { color: '#512bd4' }),
  dotnet: React.createElement(SiDotnet, { color: '#512bd4' }),
  go: React.createElement(SiGo, { color: '#00add8' }),

  // Data / AI
  tensorflow: React.createElement(SiTensorflow, { color: '#ff6f00' }),

  // Testing
  cypress: React.createElement(SiCypress, { color: '#17202c' }),

  // Reactive
  rxjs: React.createElement(FaProjectDiagram, { color: '#b7178c' }),

  // DB
  postgresql: React.createElement(SiPostgresql, { color: '#336791' }),
  postgres: React.createElement(SiPostgresql, { color: '#336791' }),
  mongodb: React.createElement(SiMongodb, { color: '#47a248' }),
  mongo: React.createElement(SiMongodb, { color: '#47a248' }),

  // DevOps / Cloud
  docker: React.createElement(FaDocker, { color: '#2496ed' }),
  kubernetes: React.createElement(SiKubernetes, { color: '#326ce5' }),
  firebase: React.createElement(SiFirebase, { color: '#ffca28' }),
  azure: React.createElement(FaMicrosoft, { color: '#0078d4' }),

  // Gestión
  jira: React.createElement(FaProjectDiagram, { color: '#0052cc' }),
  trello: React.createElement(FaProjectDiagram, { color: '#0079bf' }),

  // Systems
  linux: React.createElement(FaLinux, { color: '#000000' }),
  git: React.createElement(FaGitAlt, { color: '#f05032' }),

  // Low level
  c: React.createElement(SiC, { color: '#555555' }),
  'c++': React.createElement(SiCplusplus, { color: '#00599c' }),
  smalltalk: React.createElement(FaDatabase, { color: '#ff9800' }),

  // Arquitectura
  hexagonal: React.createElement(FaServer, { color: '#9c27b0' }),
  solid: React.createElement(FaProjectDiagram, { color: '#4caf50' }),

  // Storage / Hardware
  storage: React.createElement(FaDatabase, { color: '#6a1b9a' }),
  hardware: React.createElement(FaMicrochip, { color: '#607d8b' }),
  atm: React.createElement(FaMicrochip, { color: '#37474f' }),

  // Metodologías
  scrum: React.createElement(FaProjectDiagram, { color: '#6a1b9a' }),
  kanban: React.createElement(FaProjectDiagram, { color: '#00897b' }),
  agile: React.createElement(FaProjectDiagram, { color: '#ff7043' }),
}