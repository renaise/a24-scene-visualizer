import { Search, X } from 'lucide-react'

export interface SearchFiltersProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  selectedComposition: string[]
  selectedColor: string[]
  selectedShotType: string[]
  selectedMood: string[]
  onCompositionChange: (types: string[]) => void
  onColorChange: (colors: string[]) => void
  onShotTypeChange: (types: string[]) => void
  onMoodChange: (moods: string[]) => void
  onClearAll: () => void
}

const COMPOSITION_OPTIONS = [
  'symmetrical', 'centered', 'rule-of-thirds', 'minimalist', 'wide',
  'tight', 'natural', 'framed', 'chaotic'
]

const COLOR_OPTIONS = [
  'blue', 'red', 'yellow', 'green', 'orange', 'pink',
  'black-white', 'neon', 'warm', 'cool', 'muted', 'vibrant'
]

const SHOT_TYPE_OPTIONS = [
  'wide', 'medium', 'close-up', 'portrait', 'landscape',
  'interior', 'exterior'
]

const MOOD_OPTIONS = [
  'intimate', 'tense', 'romantic', 'mysterious', 'epic',
  'contemplative', 'surreal', 'dark', 'elegant'
]

export function SearchFilters({
  searchQuery,
  onSearchChange,
  selectedComposition,
  selectedColor,
  selectedShotType,
  selectedMood,
  onCompositionChange,
  onColorChange,
  onShotTypeChange,
  onMoodChange,
  onClearAll
}: SearchFiltersProps) {
  const hasActiveFilters =
    selectedComposition.length > 0 ||
    selectedColor.length > 0 ||
    selectedShotType.length > 0 ||
    selectedMood.length > 0

  const toggleFilter = (
    current: string[],
    value: string,
    onChange: (values: string[]) => void
  ) => {
    if (current.includes(value)) {
      onChange(current.filter(v => v !== value))
    } else {
      onChange([...current, value])
    }
  }

  return (
    <div className="px-6 py-4 border-b border-[#1a1a1a] space-y-4">
      {/* Search bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666]" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by film, director, or description..."
          className="w-full pl-10 pr-4 py-2 bg-[rgba(255,255,255,0.03)] border border-[#1a1a1a] text-[13px] text-white placeholder-[#666] focus:outline-none focus:border-[#333] transition-colors"
        />
      </div>

      {/* Filter Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-[10px] text-[#666] uppercase tracking-wider font-medium">
            Visual Filters
          </div>
          {hasActiveFilters && (
            <button
              onClick={onClearAll}
              className="text-[10px] text-[#999] hover:text-white transition-colors flex items-center gap-1"
            >
              <X className="w-3 h-3" />
              Clear All
            </button>
          )}
        </div>

        {/* Composition */}
        <FilterGroup
          label="Composition"
          options={COMPOSITION_OPTIONS}
          selected={selectedComposition}
          onToggle={(value) => toggleFilter(selectedComposition, value, onCompositionChange)}
        />

        {/* Color */}
        <FilterGroup
          label="Color"
          options={COLOR_OPTIONS}
          selected={selectedColor}
          onToggle={(value) => toggleFilter(selectedColor, value, onColorChange)}
        />

        {/* Shot Type */}
        <FilterGroup
          label="Shot Type"
          options={SHOT_TYPE_OPTIONS}
          selected={selectedShotType}
          onToggle={(value) => toggleFilter(selectedShotType, value, onShotTypeChange)}
        />

        {/* Mood */}
        <FilterGroup
          label="Mood"
          options={MOOD_OPTIONS}
          selected={selectedMood}
          onToggle={(value) => toggleFilter(selectedMood, value, onMoodChange)}
        />
      </div>
    </div>
  )
}

interface FilterGroupProps {
  label: string
  options: string[]
  selected: string[]
  onToggle: (value: string) => void
}

function FilterGroup({ label, options, selected, onToggle }: FilterGroupProps) {
  return (
    <div>
      <div className="text-[9px] text-[#666] uppercase tracking-wider mb-2">
        {label}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onToggle(option)}
            className={`px-2 py-1 text-[9px] uppercase tracking-wide transition-all ${
              selected.includes(option)
                ? 'bg-white text-black'
                : 'bg-[rgba(255,255,255,0.08)] text-[#999] hover:text-white hover:bg-[rgba(255,255,255,0.12)]'
            }`}
          >
            {option.replace('-', ' ')}
          </button>
        ))}
      </div>
    </div>
  )
}
