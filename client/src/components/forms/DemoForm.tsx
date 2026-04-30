import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { demoRequestSchema, type DemoRequest } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GlowingButton } from "../common/GlowingButton";
import { CheckCircle2 } from "lucide-react";

interface DemoFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DemoForm({ open, onOpenChange }: DemoFormProps) {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<DemoRequest>({
    resolver: zodResolver(demoRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = (_data: DemoRequest) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      form.reset();
      toast({
        title: t('demoForm.successTitle'),
        description: t('demoForm.successDescription'),
      });

      setTimeout(() => {
        setIsSuccess(false);
        onOpenChange(false);
      }, 3000);
    }, 500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border" data-testid="dialog-demo-form">
        {isSuccess ? (
          <div className="py-12 text-center" data-testid="success-message">
            <CheckCircle2 className="w-16 h-16 mx-auto mb-4 text-[#239DFF]" />
            <DialogTitle className="text-2xl mb-2">{t('demoForm.successTitle')}</DialogTitle>
            <DialogDescription className="text-base">
              {t('demoForm.successDescription')}
            </DialogDescription>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl" data-testid="text-form-title">{t('demoForm.title')}</DialogTitle>
              <DialogDescription data-testid="text-form-description">
                {t('demoForm.subtitle')}
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('demoForm.name')} *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t('demoForm.namePlaceholder')}
                          {...field}
                          data-testid="input-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('demoForm.email')} *</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder={t('demoForm.emailPlaceholder')}
                          {...field}
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('demoForm.phone')}</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder={t('demoForm.phonePlaceholder')}
                          {...field}
                          value={field.value || ""}
                          data-testid="input-phone"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('demoForm.company')}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t('demoForm.companyPlaceholder')}
                          {...field}
                          value={field.value || ""}
                          data-testid="input-company"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('demoForm.message')}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t('demoForm.messagePlaceholder')}
                          className="resize-none min-h-[100px]"
                          {...field}
                          value={field.value || ""}
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-4">
                  <GlowingButton
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                    data-testid="button-submit-demo"
                  >
                    {isSubmitting ? t('demoForm.submitting') : t('demoForm.submit')}
                  </GlowingButton>
                </div>
              </form>
            </Form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
