"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Mail, Phone, MapPin, Send, Check, AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { sendContactEmail } from "@/app/actions/send-email"

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    if (!formRef.current) return

    const formData = new FormData(formRef.current)

    try {
      const result = await sendContactEmail({
        firstName: formData.get("first-name") as string,
        lastName: formData.get("last-name") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string,
      })

      if (result.success) {
        setIsSubmitted(true)
      } else {
        setError("Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.")
      }
    } catch (err) {
      setError("Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              We'd love to hear from you. Please fill out the form below or reach out using the contact information.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 pt-12 md:grid-cols-2 md:gap-12">
          <Card className="border-2 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Contact Information</CardTitle>
              <CardDescription>Reach out to us directly through any of these channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Phone</p>
                  <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Email</p>
                  <p className="text-sm text-muted-foreground">contact@company.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Address</p>
                  <p className="text-sm text-muted-foreground">
                    123 Business Avenue, Suite 500
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
              <Separator className="my-4" />
              <div>
                <p className="mb-2 text-sm font-medium leading-none">Business Hours</p>
                <p className="text-sm text-muted-foreground">Monday - Friday: 9AM - 5PM EST</p>
                <p className="text-sm text-muted-foreground">Saturday - Sunday: Closed</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-2 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="flex h-[320px] flex-col items-center justify-center space-y-4 text-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Message Envoyé</h3>
                  <p className="text-muted-foreground">
                    Merci de nous avoir contacté. Nous vous répondrons dans les plus brefs délais.
                  </p>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                    Envoyer un autre message
                  </Button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">Prénom</Label>
                      <Input id="first-name" name="first-name" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Nom</Label>
                      <Input id="last-name" name="last-name" placeholder="Doe" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Dites-nous comment nous pouvons vous aider..."
                      className="min-h-[120px] resize-none"
                      required
                    />
                  </div>
                </form>
              )}
            </CardContent>
            {!isSubmitted && (
              <CardFooter>
                <Button className="w-full" onClick={handleSubmit} disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="mr-2">Envoi en cours</span>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Envoyer le message
                    </>
                  )}
                </Button>
              </CardFooter>
            )}
          </Card>
        </div>
      </div>
    </section>
  )
}
