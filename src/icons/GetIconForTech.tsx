import { FaProjectDiagram } from 'react-icons/fa'
import { techIcons } from './TechIcons'

export const getIconForTech = (tech: string) => {
  const t = tech.toLowerCase().trim()

  // Frontend
  if (t.includes('react')) return techIcons.react
  if (t.includes('angular')) return techIcons.angular
  if (t === 'js' || t.includes('javascript')) return techIcons.javascript
  if (t.includes('typescript')) return techIcons.typescript
  if (t.includes('html')) return techIcons.html
  if (t.includes('css')) return techIcons.css

  // Backend
  if (t.includes('node')) return techIcons.node
  if (t.includes('nest')) return techIcons.nest
  if (t.includes('python')) return techIcons.python
  if (t.includes('django')) return techIcons.django
  if (t.includes('java')) return techIcons.java
  if (t.includes('.net') || t.includes('dotnet')) return techIcons['.net']
  if (t === 'go' || t.includes(' golang')) return techIcons.go

  // Reactive / AI / Testing
  if (t.includes('rxjs')) return techIcons.rxjs
  if (t.includes('tensorflow')) return techIcons.tensorflow
  if (t.includes('cypress')) return techIcons.cypress

  // Databases
  if (t.includes('postgres')) return techIcons.postgresql
  if (t.includes('mongo')) return techIcons.mongodb

  // DevOps / Cloud
  if (t.includes('docker')) return techIcons.docker
  if (t.includes('kubernetes')) return techIcons.kubernetes
  if (t.includes('firebase')) return techIcons.firebase
  if (t.includes('azure')) return techIcons.azure

  // Systems
  if (t.includes('git')) return techIcons.git
  if (t.includes('linux')) return techIcons.linux

  // Low level
  if (t === 'c') return techIcons.c
  if (t.includes('c++')) return techIcons['c++']
  if (t.includes('smalltalk')) return techIcons.smalltalk

  // Arquitectura
  if (t.includes('hexagonal')) return techIcons.hexagonal
  if (t.includes('solid')) return techIcons.solid

  // Storage / Hardware
  if (t.includes('storage')) return techIcons.storage
  if (t.includes('hardware')) return techIcons.hardware
  if (t.includes('atm')) return techIcons.atm

  // Gestión
  if (t.includes('jira')) return techIcons.jira
  if (t.includes('trello')) return techIcons.trello

  // Metodologías
  if (t.includes('scrum')) return techIcons.scrum
  if (t.includes('kanban')) return techIcons.kanban
  if (t.includes('agile')) return techIcons.agile

  return <FaProjectDiagram />
}