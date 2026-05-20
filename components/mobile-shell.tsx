'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Bell, Heart, House, MessageCircle, PlusSquare, UserRound, X } from 'lucide-react';
import Image from 'next/image';
import { useMemo, useState } from 'react';

type Circle = {
  id: string;
  name: string;
  emoji: string;
};

type Moment = {
  id: number;
  user: string;
  circleId: string;
  mood: string;
  time: string;
  img: string;
  reactions: number;
  comments: number;
};

const circles: Circle[] = [
  { id: 'all', name: '모두', emoji: '✨' },
  { id: 'family', name: '가족', emoji: '🏠' },
  { id: 'besties', name: '베프', emoji: '💞' },
  { id: 'roommates', name: '룸메', emoji: '🌙' }
];

const moments: Moment[] = [
  {
    id: 1,
    user: 'Mina',
    circleId: 'family',
    mood: '비 내리는 창가, 따뜻한 차 한 잔 ☕',
    time: '방금',
    img: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=900',
    reactions: 14,
    comments: 5
  },
  {
    id: 2,
    user: 'Jiho',
    circleId: 'besties',
    mood: '퇴근길 산책. 바람이 정말 부드러웠어.',
    time: '12분 전',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900',
    reactions: 21,
    comments: 8
  },
  {
    id: 3,
    user: 'Noah',
    circleId: 'roommates',
    mood: '오늘 저녁은 집밥 성공 🍳',
    time: '1시간 전',
    img: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=900',
    reactions: 12,
    comments: 4
  }
];

export function MobileShell() {
  const [selectedCircle, setSelectedCircle] = useState<string>('all');
  const [isComposerOpen, setIsComposerOpen] = useState(false);

  const filteredMoments = useMemo(() => {
    if (selectedCircle === 'all') {
      return moments;
    }

    return moments.filter((moment) => moment.circleId === selectedCircle);
  }, [selectedCircle]);

  return (
    <main className="mx-auto min-h-screen max-w-md px-4 pb-28 pt-6">
      <motion.header initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">private circle</p>
          <h1 className="text-2xl font-semibold">Cozy Circle</h1>
        </div>
        <button className="rounded-full border border-white/20 bg-white/10 p-3 transition hover:bg-white/20" aria-label="Notifications">
          <Bell className="h-4 w-4" />
        </button>
      </motion.header>

      <section className="mb-6 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
        <p className="mb-2 text-xs text-zinc-400">오늘의 감정 기록</p>
        <div className="flex items-center justify-between">
          <p className="text-sm text-zinc-100">3개의 소중한 순간이 아카이브에 저장됐어요.</p>
          <span className="rounded-full bg-blush/20 px-3 py-1 text-xs text-blush">day 18</span>
        </div>
      </section>

      <section className="mb-6 flex gap-3 overflow-x-auto pb-1">
        {circles.map((circle, idx) => {
          const active = selectedCircle === circle.id;
          return (
            <motion.button
              key={circle.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.06 }}
              onClick={() => setSelectedCircle(circle.id)}
              className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm transition ${
                active
                  ? 'border-moss/70 bg-moss/20 text-moss'
                  : 'border-white/20 bg-white/5 text-zinc-100 hover:bg-white/10'
              }`}
            >
              {circle.emoji} {circle.name}
            </motion.button>
          );
        })}
      </section>

      <section className="space-y-4">
        {filteredMoments.map((moment, idx) => (
          <motion.article
            key={moment.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 + idx * 0.1 }}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-soft backdrop-blur"
          >
            <div className="relative h-56">
              <Image src={moment.img} alt={moment.mood} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent" />
              <div className="absolute bottom-3 left-3">
                <p className="text-sm font-medium">{moment.user}</p>
                <p className="text-xs text-zinc-300">{moment.time}</p>
              </div>
            </div>
            <div className="space-y-3 p-4">
              <p className="text-sm leading-relaxed text-zinc-100">{moment.mood}</p>
              <div className="flex items-center justify-between text-zinc-300">
                <div className="flex gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <Heart className="h-4 w-4" /> {moment.reactions}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" /> {moment.comments}
                  </span>
                </div>
                <span className="rounded-full bg-plum/20 px-3 py-1 text-xs text-plum">archive</span>
              </div>
            </div>
          </motion.article>
        ))}

        {filteredMoments.length === 0 && (
          <div className="rounded-2xl border border-dashed border-white/20 p-8 text-center text-sm text-zinc-400">
            아직 공유된 순간이 없어요. 첫 감정을 남겨보세요.
          </div>
        )}
      </section>

      <button
        onClick={() => setIsComposerOpen(true)}
        className="fixed bottom-24 right-6 rounded-full bg-blush px-4 py-3 text-sm font-semibold text-ink shadow-soft transition hover:scale-[1.02]"
      >
        + 실시간 공유
      </button>

      <AnimatePresence>
        {isComposerOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsComposerOpen(false)}
            />
            <motion.aside
              initial={{ y: 420, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 420, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 220, damping: 26 }}
              className="fixed inset-x-0 bottom-0 mx-auto max-w-md rounded-t-3xl border border-white/15 bg-zinc-900 p-5"
            >
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold">지금의 순간 공유</h2>
                <button onClick={() => setIsComposerOpen(false)} aria-label="Close composer">
                  <X className="h-5 w-5 text-zinc-400" />
                </button>
              </div>
              <div className="space-y-3 text-sm">
                <button className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-left hover:bg-white/10">📷 사진 올리기</button>
                <button className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-left hover:bg-white/10">🎬 짧은 영상 올리기</button>
                <button className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-left hover:bg-white/10">📝 오늘 감정 한 줄 남기기</button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <nav className="fixed inset-x-0 bottom-4 mx-auto flex max-w-xs items-center justify-between rounded-full border border-white/20 bg-zinc-900/90 px-6 py-3 backdrop-blur">
        <House className="h-5 w-5 text-moss" />
        <PlusSquare className="h-5 w-5" />
        <Heart className="h-5 w-5" />
        <UserRound className="h-5 w-5" />
      </nav>
    </main>
  );
}
