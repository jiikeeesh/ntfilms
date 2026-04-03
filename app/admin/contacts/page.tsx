import { prisma } from "../../../lib/prisma";
import { revalidatePath } from "next/cache";
import { Mail, Trash2, Phone } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function ContactsAdmin() {
  const messages = await prisma.message.findMany({
    orderBy: { createdAt: "desc" },
  });

  async function deleteMessage(formData: FormData) {
    "use server";
    const id = Number(formData.get("id"));
    if (id) {
      await prisma.message.delete({ where: { id } });
      revalidatePath("/admin/contacts");
    }
  }

  return (
    <div className="min-h-screen bg-[#080808] text-[#f5f0e8] p-8 lg:p-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-serif text-[#3b82f6] mb-2">Inbox</h1>
        <p className="text-[#888888] mb-12">All contact submissions from the website.</p>

        {messages.length === 0 ? (
          <div className="text-[#555555] text-center py-20 border border-[rgba(255,255,255,0.05)] rounded-2xl">
            No messages yet.
          </div>
        ) : (
          <div className="space-y-6">
            {messages.map((msg: { id: number; name: string; email: string; phone: string | null; budget: string; details: string; createdAt: Date }) => (
              <div key={msg.id} className="bg-[#111111]/80 backdrop-blur-md border border-[rgba(255,255,255,0.07)] rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row gap-8 hover:border-[#3b82f6]/30 transition-colors">
                
                {/* Meta Info */}
                <div className="md:w-1/3 shrink-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#3b82f6]/20 text-[#3b82f6] flex items-center justify-center font-bold text-sm">
                        {msg.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#f5f0e8]">{msg.name}</h3>
                        <a href={`mailto:${msg.email}`} className="text-[#3b82f6] text-xs hover:underline">{msg.email}</a>
                      </div>
                    </div>
                    
                    <div className="text-xs text-[#888888] space-y-1">
                      {msg.phone && <p>Phone: <a href={`tel:${msg.phone}`} className="text-[#3b82f6] hover:underline font-mono">{msg.phone}</a></p>}
                      <p>Budget: <span className="text-[#d4cfc5]">{msg.budget}</span></p>
                      <p>Received: <span className="text-[#d4cfc5]">{new Date(msg.createdAt).toLocaleString()}</span></p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 flex gap-3">
                    <a 
                      href={`mailto:${msg.email}?subject=Re: Your inquiry to ntfilms`}
                      className="px-4 py-2 border border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6]/10 rounded-lg text-xs font-semibold tracking-widest uppercase transition-colors flex items-center justify-center gap-2 flex-1"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      Reply
                    </a>
                    
                    {msg.phone && (
                      <a 
                        href={`tel:${msg.phone}`}
                        className="px-4 py-2 border border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6]/10 rounded-lg text-xs font-semibold tracking-widest uppercase transition-colors flex items-center justify-center gap-2 flex-1"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        Call
                      </a>
                    )}
                    
                    <form action={deleteMessage}>
                      <input type="hidden" name="id" value={msg.id} />
                      <button 
                        type="submit"
                        className="p-2 border border-red-900/50 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors flex items-center justify-center h-full"
                        title="Delete message"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </form>
                  </div>
                </div>

                {/* Details */}
                <div className="md:w-2/3 bg-[#080808] rounded-xl p-5 border border-[rgba(255,255,255,0.03)] selection:bg-[#3b82f6]/30">
                  <p className="whitespace-pre-wrap text-sm text-[#d4cfc5] leading-relaxed">
                    {msg.details}
                  </p>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
