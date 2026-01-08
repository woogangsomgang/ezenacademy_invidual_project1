import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Calendar } from "lucide-react";
import { useState } from "react";

interface ReservationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ReservationModal({ open, onOpenChange }: ReservationModalProps) {
  const [selectedRoom, setSelectedRoom] = useState("Room 101");
  const [checkIn, setCheckIn] = useState("2025.01.27");
  const [checkOut, setCheckOut] = useState("2025.01.28");

  const rooms = ["Room 101", "Room 102", "Room 103", "Room 104"];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-['Noto_Sans_KR'] text-[#333]">
            예약하기
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* Room Selection */}
          <div className="space-y-2">
            <label className="text-sm font-['Noto_Sans_KR'] text-[#555]">
              객실 선택
            </label>
            <select 
              value={selectedRoom}
              onChange={(e) => setSelectedRoom(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 font-['Noto_Sans_KR'] text-[#333] focus:outline-none focus:ring-2 focus:ring-[#709474]"
            >
              {rooms.map((room) => (
                <option key={room} value={room}>{room}</option>
              ))}
            </select>
          </div>

          {/* Check In */}
          <div className="space-y-2">
            <label className="text-sm font-['Noto_Sans_KR'] text-[#555]">
              체크인
            </label>
            <div className="relative">
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 font-['Noto_Sans_KR'] text-[#333] focus:outline-none focus:ring-2 focus:ring-[#709474]"
              />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#555] pointer-events-none" />
            </div>
          </div>

          {/* Check Out */}
          <div className="space-y-2">
            <label className="text-sm font-['Noto_Sans_KR'] text-[#555]">
              체크아웃
            </label>
            <div className="relative">
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 font-['Noto_Sans_KR'] text-[#333] focus:outline-none focus:ring-2 focus:ring-[#709474]"
              />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#555] pointer-events-none" />
            </div>
          </div>

          {/* Guest Info */}
          <div className="space-y-2">
            <label className="text-sm font-['Noto_Sans_KR'] text-[#555]">
              이름
            </label>
            <input
              type="text"
              placeholder="성함을 입력해주세요"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 font-['Noto_Sans_KR'] text-[#333] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#709474]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-['Noto_Sans_KR'] text-[#555]">
              연락처
            </label>
            <input
              type="tel"
              placeholder="010-0000-0000"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 font-['Noto_Sans_KR'] text-[#333] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#709474]"
            />
          </div>

          {/* Submit Button */}
          <Button 
            className="w-full bg-[#709474] hover:bg-[#5a7a5e] text-white py-6 text-lg font-['Noto_Sans_KR']"
            onClick={() => {
              alert('예약이 접수되었습니다. 곧 연락드리겠습니다.');
              onOpenChange(false);
            }}
          >
            예약 신청하기
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
