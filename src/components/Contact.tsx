import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { api } from "../utils/api";
import { useLanguage } from "../contexts/LanguageContext";
import { getContactText } from "../translations/contact";

export function Contact() {
  const { language } = useLanguage();
  const t = getContactText(language);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "individual",
    numberOfPeople: "1",
    experienceLevel: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSuccess(false);
    
    try {
      await api.saveMessage(formData);
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", serviceType: "individual", numberOfPeople: "1", experienceLevel: "", message: "" });
      
      // Show success message
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error("Error:", error);
      alert(t.errorMessage);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-slate-300">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl text-white mb-6">{t.contactTitle}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <p className="text-slate-300">{t.emailText}</p>
                    <a href="mailto:info.skiwithme@gmail.com" className="text-white hover:text-blue-400">
                      info.skiwithme@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <p className="text-slate-300">{t.phoneText}</p>
                    <a href="tel:+4748511023" className="text-white hover:text-blue-400">
                      +47 485 11 023
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <p className="text-slate-300">{t.locationText}</p>
                    <p className="text-white">{t.locationValue}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
              <h4 className="text-white mb-3">{t.expectTitle}</h4>
              <ul className="space-y-2 text-slate-300">
                <li>• {t.expect1}</li>
                <li>• {t.expect2}</li>
                <li>• {t.expect3}</li>
                <li>• {t.expect4}</li>
                <li>• {t.expect5}</li>
                <li>• {t.expect6}</li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder={t.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                />
                <Input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                />
              </div>
              
              <Input
                type="tel"
                placeholder={t.phonePlaceholder}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
              />

              <div className="space-y-3">
                <Label className="text-white">{t.lookingFor}</Label>
                <RadioGroup
                  value={formData.serviceType}
                  onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-3 bg-slate-800/50 p-3 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
                    <RadioGroupItem value="individual" id="individual" />
                    <Label htmlFor="individual" className="text-slate-200 cursor-pointer flex-1">
                      {t.serviceIndividual}
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 bg-slate-800/50 p-3 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
                    <RadioGroupItem value="online" id="online" />
                    <Label htmlFor="online" className="text-slate-200 cursor-pointer flex-1">
                      {t.serviceOnline}
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 bg-slate-800/50 p-3 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
                    <RadioGroupItem value="fullday" id="fullday" />
                    <Label htmlFor="fullday" className="text-slate-200 cursor-pointer flex-1">
                      {t.serviceFullday}
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 bg-slate-800/50 p-3 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
                    <RadioGroupItem value="video" id="video" />
                    <Label htmlFor="video" className="text-slate-200 cursor-pointer flex-1">
                      {t.serviceVideo}
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 bg-slate-800/50 p-3 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
                    <RadioGroupItem value="custom" id="custom" />
                    <Label htmlFor="custom" className="text-slate-200 cursor-pointer flex-1">
                      {t.serviceCustom}
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-white">{t.numberOfPeople}</Label>
                  <Input
                    type="number"
                    min="1"
                    placeholder={t.peoplePlaceholder}
                    value={formData.numberOfPeople}
                    onChange={(e) => setFormData({ ...formData, numberOfPeople: e.target.value })}
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-white">{t.experienceLevel}</Label>
                  <select
                    value={formData.experienceLevel}
                    onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">{t.selectLevel}</option>
                    <option value="beginner">{t.levelBeginner}</option>
                    <option value="intermediate">{t.levelIntermediate}</option>
                    <option value="advanced">{t.levelAdvanced}</option>
                    <option value="expert">{t.levelExpert}</option>
                    <option value="mixed">{t.levelMixed}</option>
                  </select>
                </div>
              </div>

              <div>
                <Label className="text-white mb-2 block">
                  {t.detailsLabel}
                  {formData.serviceType === 'video' && t.detailsVideo}
                  {formData.serviceType === 'fullday' && t.detailsFullday}
                  {formData.serviceType === 'custom' && t.detailsCustom}
                  {formData.serviceType === 'online' && t.detailsOnline}
                  {formData.serviceType === 'individual' && t.detailsIndividual}
                </Label>
                <Textarea
                  placeholder={
                    formData.serviceType === 'online'
                      ? t.placeholderOnline
                      : formData.serviceType === 'video' 
                      ? t.placeholderVideo
                      : formData.serviceType === 'fullday'
                      ? t.placeholderFullday
                      : formData.serviceType === 'custom'
                      ? t.placeholderCustom
                      : t.placeholderIndividual
                  }
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 resize-none"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 gap-2"
                disabled={sending}
              >
                {sending ? t.sending : t.submitButton}
                <Send className="w-4 h-4" />
              </Button>
              
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg"
                >
                  <p className="text-green-400 text-center">
                    {t.successFinal}
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-24 pt-12 border-t border-slate-800"
      >
        <p className="text-slate-400">
          {t.copyright}
        </p>
      </motion.div>
    </section>
  );
}