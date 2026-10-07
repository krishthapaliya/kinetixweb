export function SectionBadge({ label }: { label: string }) {
  return (
    <div className="border border-[#055d17] border-solid flex items-center rounded-[58px]">
      <div className="flex items-center justify-center px-5 py-[10px]">
        <p className="font-['Outfit:Regular'] font-normal leading-[0.98] text-[#055d17] text-[20px] text-center whitespace-nowrap">
          {label}
        </p>
      </div>
    </div>
  )
}
